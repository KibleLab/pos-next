import type { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import styles from '../styles/pages/_app';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  return (
    <>
      <Global styles={styles} />
      <Component {...pageProps} />
    </>
  );
}
