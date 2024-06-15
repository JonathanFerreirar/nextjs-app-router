import posthog from 'posthog-js';

import PostHogClient from './posthogclient';

type postHogEventServeProps = {
    event: string;
    path?: string;
};

export const postHogEventServe = ({ event, path }: postHogEventServeProps) => {
  const posthogClient = PostHogClient();

  posthogClient.capture({
    distinctId: 'no-user',
    event,
    properties: {
      $current_url: path,
    },
  });
};

export const postHogEventClient = ({ event, path }: postHogEventServeProps) => {
  if (path) {
    posthog.capture(event, {
      $current_url: path,
    });
  } else {
    posthog.capture(event);
  }
};
