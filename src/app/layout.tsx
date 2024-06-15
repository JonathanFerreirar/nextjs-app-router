import './globals.css';

import React from 'react';
import type { Metadata } from 'next';

import RouterProgressBar from '@/navigation/progressbar/provider';
import PostHogProvider from '@/posthog/provider';

import { poppins } from './fonts';

export const metadata: Metadata = {
  title: 'Blog | Code Community',
  description: 'Make best post with Code Community Blog',
};

const RootLayout = ({
  children,
}: Readonly<{
    children: React.ReactNode;
}>) => (
    <html lang='pt' suppressHydrationWarning>
        <body className={poppins.className}>
            <PostHogProvider>
                <RouterProgressBar>{children}</RouterProgressBar>
            </PostHogProvider>
        </body>
    </html>
);

export default RootLayout;
