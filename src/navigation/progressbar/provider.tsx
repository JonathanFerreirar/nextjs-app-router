'use client';

import React from 'react';
import { Next13ProgressBar } from 'next13-progressbar';

const RouterProgressBar = ({ children }: { children: React.ReactNode }) => (
    <React.Fragment>
        {children}
        <React.Suspense>
            <Next13ProgressBar
              height='4px'
              color='#F6640A'
              options={{ showSpinner: false }}
              showOnShallow
            />
        </React.Suspense>
    </React.Fragment>
);

export default RouterProgressBar;
