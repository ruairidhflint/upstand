import { SessionProvider, SessionProviderProps } from "next-auth/react";
import type { AppProps } from "next/app";
import "../styles/globals.css";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<SessionProviderProps>) {
  return (
    <SessionProvider session={session} refetchInterval={0}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
