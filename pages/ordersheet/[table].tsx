import { Container, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import styles from '../../styles/pages/ordersheet';
import NavBar from '../../components/NavBar';

export default function OrderSheet() {
  const router = useRouter();
  const { table } = router.query;
  return (
    <>
      <NavBar
        nameArr={['메뉴 선택', 'back']}
        addrArr={[`/menu-slct/${table}`]}
      />
      <Container css={styles.contents} maxWidth={false} disableGutters>
        <Typography css={styles.title}>주문서 – Table {table}</Typography>
        <Container css={styles.list} maxWidth={false} disableGutters />
        <Container css={styles.info} maxWidth={false} disableGutters />
      </Container>
    </>
  );
}
