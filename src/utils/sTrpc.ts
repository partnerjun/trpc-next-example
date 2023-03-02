import { appRouter } from "~/server/routers/_app";

// 서버사이드에서 사용할 trpc 클라이언트
export const sTrpc = appRouter.createCaller({ userAgent: '' })
