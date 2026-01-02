
'use client';

import { useState, useEffect, useCallback } from 'react';
import { SM2State, INITIAL_SM2_STATE } from '@/lib/types';
import { updateSM2State } from '@/lib/sm2';
import { storage } from '@/lib/storage';

export function useCurriculumSRS() {
    const [srsMap, setSrsMap] = useState<Record<string, SM2State>>({});
    const [isLoading, setIsLoading] = useState(true);

    // Initial load from localStorage
    useEffect(() => {
        setSrsMap(storage.getSRS());
        setIsLoading(false);
    }, []);

    const saveWordState = useCallback(async (germanWord: string, state: SM2State) => {
        // Update local state
        const currentMap = storage.getSRS();
        const newMap = {
            ...currentMap,
            [germanWord]: state
        };
        setSrsMap(newMap);
        storage.setSRS(newMap);
    }, []);

    const getWordState = useCallback((germanWord: string): SM2State => {
        return srsMap[germanWord] || INITIAL_SM2_STATE;
    }, [srsMap]);

    const updateWordSRS = useCallback((germanWord: string, quality: number) => {
        const currentState = getWordState(germanWord);
        const nextState = updateSM2State(quality, currentState);
        saveWordState(germanWord, nextState);
        return nextState;
    }, [getWordState, saveWordState]);

    return {
        srsMap,
        isLoading,
        getWordState,
        updateWordSRS,
        saveWordState
    };
}
