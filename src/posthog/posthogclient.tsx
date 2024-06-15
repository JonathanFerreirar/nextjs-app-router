import { PostHog } from 'posthog-node';

const PostHogClient = () => {
  const posthogClient = new PostHog(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
  });
  return posthogClient;
};

export default PostHogClient;
