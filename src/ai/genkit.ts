import { genkit } from 'genkit';
// Trigger reload 4
import { googleAI } from '@genkit-ai/google-genai';

const rawKeys = process.env.GEMINI_API_KEYS || process.env.GEMINI_API_KEY || '';
const keys = rawKeys.split(',').map(k => k.trim()).filter(k => k.length > 0);

if (keys.length > 0) {
  console.log(`Loaded ${keys.length} Gemini API keys.`);
} else {
  console.error("No Gemini API keys found in environment variables!");
}

// Create a pool of Genkit instances, one for each key
const aiInstances = keys.map(key => {
  const apiKey = key.trim();
  if (!apiKey) return null;
  return genkit({
    plugins: [googleAI({ apiKey })],
    model: 'googleai/gemini-2.5-flash',
  });
}).filter(instance => instance !== null);

if (aiInstances.length === 0) {
  console.error("No valid Gemini API keys found!");
}

// Export the first instance as default for backward compatibility
export const ai = aiInstances[0];

// Helper to execute an AI operation with retries across all available keys
export const executeWithRetry = async <T>(
  operation: (aiInstance: typeof ai) => Promise<T>
): Promise<T> => {
  if (aiInstances.length === 0) {
    throw new Error("No Genkit instances available. Check API keys.");
  }

  const MAX_GLOBAL_RETRIES = 1; // How many times to retry the entire key pool
  let globalAttempts = 0;

  while (globalAttempts <= MAX_GLOBAL_RETRIES) {
    let lastError: any;

    // Try each key in sequence (starting from a random offset to distribute load)
    const startOffset = Math.floor(Math.random() * aiInstances.length);

    for (let i = 0; i < aiInstances.length; i++) {
      const index = (startOffset + i) % aiInstances.length;
      const instance = aiInstances[index];

      try {
        return await operation(instance);
      } catch (error: any) {
        console.warn(`AI request failed with key index ${index}:`, error.message);
        lastError = error;

        // If it's not a quota error (429), maybe we shouldn't retry? 
        // But for robustness, let's retry on most errors except maybe invalid argument.
        // 429 is the main target.
        if (!error.message?.includes('429') && !error.message?.includes('quota')) {
          // For other errors, we might want to continue to next key just in case, 
          // but usually 429 is the only one where rotation helps.
        }
      }
    }

    // If we are here, all keys failed.
    // Check if we should wait and retry the whole pool.
    if (lastError?.message?.includes('429') || lastError?.message?.includes('quota')) {
      const match = lastError.message.match(/retry in ([0-9.]+)s/);
      const waitTime = match ? parseFloat(match[1]) * 1000 : 2000; // Default 2s if not parsed

      if (waitTime < 10000 && globalAttempts < MAX_GLOBAL_RETRIES) { // Only wait if < 10s
        console.log(`All keys exhausted. Waiting ${waitTime}ms before retrying pool...`);
        await new Promise(resolve => setTimeout(resolve, waitTime + 500)); // Add 500ms buffer
        globalAttempts++;
        continue;
      }
    }

    throw lastError || new Error("All AI instances failed.");
  }

  throw new Error("All AI instances failed after retries.");
};
