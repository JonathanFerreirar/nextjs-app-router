import './globals.css';

import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import RouterProgressBar from '@/navigation/progressbar/provider';
import PostHogProvider from '@/posthog/provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Blog | Code Community',
    description: 'Make best post with Code Community Blog',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt" suppressHydrationWarning>
            <body className={inter.className}>
                <PostHogProvider>
                    <RouterProgressBar>{children}</RouterProgressBar>
                </PostHogProvider>
            </body>
        </html>
    );
}
