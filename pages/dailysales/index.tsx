import { Container, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import styles from '../../styles/pages/dailysales';
import NavBar from '../../components/NavBar';

export default function DailySales() {
  const router = useRouter();
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return (
    <>
      <NavBar nameArr={['메뉴 관리', 'back']} addrArr={[`/menu-mgnt`]} />
      <Container css={styles.contents} maxWidth={false} disableGutters>
        <Typography css={styles.title}>
          당일 매출 –
          {' '}
          {year}
          년
          {' '}
          {month < 10 ? `${0}${month}` : month}
          월
          {' '}
          {day < 10 ? `${0}${day}` : day}
          일
        </Typography>
        <Container css={styles.list} maxWidth={false} disableGutters />
        <Container css={styles.info} maxWidth={false} disableGutters />
      </Container>
    </>
  );
}
