import { useCallback, useState } from "react";
import { trpc } from "~/utils/trpc";
import { sTrpc } from "~/utils/sTrpc";

const IndexPage = ({ greeting = "" }: { greeting: string; }) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  // 버튼 클릭시 요청할 쿼리
  const testQuery = trpc.test.fetch.useQuery(
    { name },
    {
      enabled: false,
      onSuccess(data) {
        setMessage(data);
      }
    }
  );

  // 버튼 클릭 핸들러
  const onClickHandler = useCallback(() => {
    setTimeout(() => testQuery.refetch(), 10);
  }, [testQuery]);

  return (
    <div>
      <h1>tRPC 테스트 페이지</h1>
      <h3>{greeting}</h3>

      <div>
        <input
          type={"text"}
          onChange={(e) => setName(e.target.value)}
          defaultValue={name}
        />
        <button onClick={onClickHandler}>전송</button>
      </div>

      <div>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default IndexPage;

export const getServerSideProps = async () => {

  // 서버로부터 받아온 페이지 서브타이틀
  const greeting = await sTrpc.test.greeting({});

  return {
    props: {
      greeting
    }
  };
};
