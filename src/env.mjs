import { z } from "zod";
import { createEnv } from "@t3-oss/env-nextjs";

export const env = createEnv({
  
  server: {
    EXAMPLE_ENV: z.string().min(3),
    OPEN_AI_API_KEY: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_ENV: z.string().min(3),
    NEXT_PUBLIC_POSTHOG_KEY: z.string().min(10),
    NEXT_PUBLIC_POSTHOG_HOST: z.string().url(),
  },

  runtimeEnv: {
    EXAMPLE_ENV: process.env.EXAMPLE_ENV,
    OPEN_AI_API_KEY: process.env.OPEN_AI_API_KEY,
    NEXT_PUBLIC_ENV:process.env.NEXT_PUBLIC_ENV,
    NEXT_PUBLIC_POSTHOG_KEY:process.env.NEXT_PUBLIC_POSTHOG_KEY,
    NEXT_PUBLIC_POSTHOG_HOST:process.env.NEXT_PUBLIC_POSTHOG_HOST,
  },
});

