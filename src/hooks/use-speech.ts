'use client';

import { useState, useCallback, useEffect } from 'react';

export function useSpeech() {
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

    useEffect(() => {
        const updateVoices = () => {
            setVoices(window.speechSynthesis.getVoices());
        };

        window.speechSynthesis.onvoiceschanged = updateVoices;
        updateVoices();

        return () => {
            window.speechSynthesis.onvoiceschanged = null;
        };
    }, []);

    const speak = useCallback((text: string, lang: string = 'de-DE') => {
        if (!window.speechSynthesis) return;

        // Stop any current speech
        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);

        // Find best German voice
        const germanVoices = voices.filter(v => v.lang.startsWith('de'));
        // Prefer Google or high quality voices if available
        const preferredVoice = germanVoices.find(v => v.name.includes('Google') || v.name.includes('Premium')) || germanVoices[0];

        if (preferredVoice) {
            utterance.voice = preferredVoice;
        }

        utterance.lang = lang;
        utterance.rate = 0.9; // Slightly slower for better learning

        utterance.onstart = () => setIsSpeaking(true);
        utterance.onend = () => setIsSpeaking(false);
        utterance.onerror = () => setIsSpeaking(false);

        window.speechSynthesis.speak(utterance);
    }, [voices]);

    const stop = useCallback(() => {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
    }, []);

    return { speak, stop, isSpeaking, voices };
}
