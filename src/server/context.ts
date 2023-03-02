import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";

// session과 같이 tRPC 요청에서 받는 'context'의 타입
export const createContext = (opts: trpcNext.CreateNextContextOptions) => {
  const headers = opts?.req?.headers || {};
  return {
    userAgent: headers?.["user-agent"]
  };
};

// context 타입 선언
export type Context = trpc.inferAsyncReturnType<typeof createContext>;
