import { AppBar, Button, Container, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from '../../styles/pages/dailysales';

export default function DailySales() {
  const router = useRouter();
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
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
      <Container css={styles.contents} maxWidth={false} disableGutters>
        <Typography css={styles.title}>
          당일 매출 – {year}년 {month < 10 ? `${0}${month}` : month}월{' '}
          {day < 10 ? `${0}${day}` : day}일
        </Typography>
        <Container css={styles.list} maxWidth={false} disableGutters />
        <Container css={styles.info} maxWidth={false} disableGutters />
      </Container>
    </>
  );
}
