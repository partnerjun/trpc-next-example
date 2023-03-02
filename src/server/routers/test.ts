import { publicProcedure, router } from "~/server/trpcInit";
import { z } from "zod";

/**
 * 'test' Endpoint 라우터
 */
export const testRouter = router({
  /**
   * 사용자가 입력한 키워드로 응답
   */
  fetch: publicProcedure
    .input(
      z.object({
        name: z.string().optional().nullish().default("FE 개발팀")
      })
    )
    .query(async ({ input,ctx }) => {
      console.log(`~~~~>  Client UserAgent : '${ctx.userAgent}'`);
      return `${input.name}님 ㅎㅇ`;
    }),

  /**
   * 페이지 진입시 노출할 서브 타이틀
   */
  greeting: publicProcedure.input(z.object({})).query(async ({ input, ctx }) => {
    return `'${process.env.USER}' tRPC 테스트 페이지입니다`;
  })
});
