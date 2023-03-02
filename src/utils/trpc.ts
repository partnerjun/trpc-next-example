import { httpBatchLink } from "@trpc/client";
import { createTRPCNext } from "@trpc/next";
import superjson from "superjson";
import type { AppRouter } from "~/server/routers/_app";

function getBaseUrl() {
  if (typeof window !== 'undefined') {
    return '';
  }
  return `http://127.0.0.1:${process.env.PORT ?? 3000}`;
}

// 클라이언트에서 사용할 trpc 클라이언트
export const trpc = createTRPCNext<AppRouter>({
  config({ ctx }) {
    return {
      transformer: superjson,
      links: [
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`,
        }),
      ],
    };
  },
  ssr: true,
});
