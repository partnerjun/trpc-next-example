import { Context } from './context';
import { initTRPC } from '@trpc/server';
import superjson from 'superjson';

// tRPC 초기화
const t = initTRPC.context<Context>().create({
  transformer: superjson, // JSON serialize 라이브러리 (Date / Map / Set 등 처리)
  errorFormatter({ shape }) {
    return shape;
  },
});

// 서버/클라이언트 양측에서 사용할 tRPC 원본 객체
export const router = t.router;
export const publicProcedure = t.procedure;
