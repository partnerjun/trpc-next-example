import { router } from "../trpcInit";
import { testRouter } from "~/server/routers/test";

export const appRouter = router({
  test: testRouter,
});

export type AppRouter = typeof appRouter;
