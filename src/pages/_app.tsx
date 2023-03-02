import type { AppType } from "next/app";
import { trpc } from "~/utils/trpc";

const App = (({ Component, pageProps }) => {
return <Component {...pageProps} />
}) as AppType;

export default trpc.withTRPC(App);
