import "../styles.css";
import "../custom.css";

import { SSRProvider } from "@react-aria/ssr";
import type { AppProps } from "next/app";
import type { ReactNode } from "react";
import { Analytics } from '@vercel/analytics/react';

type NextraAppProps = AppProps & {
  Component: AppProps["Component"] & {
    getLayout: (page: ReactNode) => ReactNode;
  };
};

export default function Nextra({ Component, pageProps }: NextraAppProps) {
  return (
    <SSRProvider>
      <Component {...pageProps} />
      <Analytics />
    </SSRProvider>
  );
}
