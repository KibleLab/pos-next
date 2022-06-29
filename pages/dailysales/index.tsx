/** @jsxImportSource @emotion/react **/
import { css } from '@emotion/react';
import { AppBar, Button, Container } from '@mui/material';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function DailySales() {
  const router = useRouter();
  return (
    <>
      <AppBar css={styles.appBar} elevation={1}>
        <Button css={styles.appBarTitle} onClick={() => router.push(`/`)}>
          <Image src='/images/title.svg' width={319} height={58} />
        </Button>
        <Button
          css={styles.appBarBtnLeft}
          onClick={() => router.push(`/menu-mgnt`)}>
          메뉴 관리
        </Button>
        <Button css={styles.appBarBtnRight} onClick={() => router.back()}>
          <Image src='/images/back.svg' width={24} height={24} />
        </Button>
      </AppBar>
      <Container css={styles.contents} maxWidth={false} disableGutters />
    </>
  );
}

const styles = {
  appBar: css`
    position: fixed;
    width: 1920px;
    height: 86px;
    left: 0;
    top: 0;
    display: inline-flex;
    background: #ffffff;
  `,
  appBarTitle: css`
    position: absolute;
    width: 319px;
    height: 85px;
    left: 40px;
    padding: 0;
  `,
  appBarBtnLeft: css`
    position: absolute;
    width: 115px;
    height: 85px;
    right: 155px;
    padding: 0;
    font-family: Roboto;
    font-size: 20px;
    font-weight: bold;
    color: black;
  `,
  appBarBtnRight: css`
    position: absolute;
    width: 115px;
    height: 85px;
    right: 40px;
    padding: 0;
    font-family: Roboto;
    font-size: 20px;
    font-weight: bold;
    color: black;
  `,
  contents: css`
    position: relative;
    width: 1920px;
    height: 994px;
    left: 0;
    top: 86px;
  `,
};
