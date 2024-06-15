'use client';

import React from 'react';
import posthog from 'posthog-js';
import { PostHogProvider as Provider } from 'posthog-js/react';

if (typeof window !== 'undefined') {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
        person_profiles: 'identified_only',
        capture_pageview: true,
    });
}

export default function PostHogProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    return <Provider client={posthog}>{children}</Provider>;
}
