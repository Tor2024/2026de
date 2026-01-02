'use client';

import { useState, useEffect } from 'react';
import { supabase, isCloudSyncEnabled } from '@/lib/supabase';
import { User } from '@supabase/supabase-js';

export function useAuth() {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(isCloudSyncEnabled);

    useEffect(() => {
        if (!isCloudSyncEnabled) {
            setLoading(false);
            return;
        }

        // Check active sessions and sets the user
        supabase.auth.getSession().then(({ data: { session } }) => {
            setUser(session?.user ?? null);
            setLoading(false);
        }).catch(() => {
            // Silently fail if network is blocked
            setLoading(false);
        });

        // Listen for changes on auth state (signed in, signed out, etc.)
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null);
            setLoading(false);
        });

        return () => subscription.unsubscribe();
    }, []);

    const signOut = async () => {
        if (isCloudSyncEnabled) {
            await supabase.auth.signOut();
        }
        setUser(null);
    };

    return { user, loading, signOut };
}
