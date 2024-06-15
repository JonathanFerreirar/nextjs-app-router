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

const PostHogProvider = ({
  children,
}: {
    children: React.ReactNode;
}) => <Provider client={posthog}>{children}</Provider>;

export default PostHogProvider;
