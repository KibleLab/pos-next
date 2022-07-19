import type { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import styles from '../styles/pages/_app';

const queryClient = new QueryClient();

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
      <Global styles={styles} />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
