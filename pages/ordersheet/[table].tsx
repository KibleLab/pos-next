import { AppBar, Button, Container, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from '../../styles/pages/ordersheet';

export default function OrderSheet() {
  const router = useRouter();
  const { table } = router.query;
  return (
    <>
      <AppBar css={styles.appBar} elevation={1}>
        <Button css={styles.appBarTitle} onClick={() => router.push(`/`)}>
          <Image src='/images/title.svg' width={319} height={58} />
        </Button>
        <Button
          css={styles.appBarBtnMenuSlct}
          onClick={() => router.push(`/menu-slct/${table}`)}>
          메뉴 선택
        </Button>
        <Button css={styles.appBarBtnBack} onClick={() => router.back()}>
          <Image src='/images/back.svg' width={24} height={24} />
        </Button>
      </AppBar>
      <Container css={styles.contents} maxWidth={false} disableGutters>
        <Typography css={styles.title}>주문서 – Table {table}</Typography>
        <Container css={styles.list} maxWidth={false} disableGutters />
        <Container css={styles.info} maxWidth={false} disableGutters />
      </Container>
    </>
  );
}
