
import * as dotenv from 'dotenv';
import path from 'path';

// Load environment variables from .env.local
const result = dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });
console.log("Dotenv result:", result.error ? result.error : "Success");
console.log("GEMINI_API_KEYS:", process.env.GEMINI_API_KEYS ? 'Found' : 'Not Found');
console.log("GEMINI_API_KEY:", process.env.GEMINI_API_KEY ? 'Found' : 'Not Found');

import * as fs from 'fs';
const rawKeys = process.env.GEMINI_API_KEYS || process.env.GEMINI_API_KEY || '';
const keys = rawKeys.split(',').map(k => k.trim()).filter(k => k.length > 0);
fs.writeFileSync('key_debug.txt', `Parsed ${keys.length} keys.\nKeys: ${keys.map(k => k.substring(0, 5) + '...').join(', ')}`, 'utf8');
console.log(`Parsed ${keys.length} keys.`);
keys.forEach((k, i) => console.log(`Key ${i + 1}: ${k.substring(0, 5)}...`));

async function main() {
    // Dynamic import to ensure env vars are loaded first
    const { verifyAnswer } = await import('./ai/flows/verify-answer');

    console.log("Testing verifyAnswer flow...");
    try {
        const result = await verifyAnswer({
            question: "Translate: The table",
            userAnswer: "Der Tisch",
            correctAnswer: "Der Tisch"
        });
        console.log("Result:", JSON.stringify(result, null, 2));
    } catch (e) {
        console.error("Error:", e);
    }
}

main();
