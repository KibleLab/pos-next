import { Container, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import styles from '../../styles/pages/menu-slct';
import menu from '../../mocks/pages/menu-slct';
import BtnMenu from '../../components/BtnMenu';
import NavBar from '../../components/NavBar';

export default function MenuSlct() {
  const router = useRouter();
  const { table } = router.query;
  return (
    <>
      <NavBar nameArr={['메뉴 관리', 'back']} addrArr={[`/menu-mgnt`]} />
      <Container css={styles.contents} maxWidth={false} disableGutters>
        <Typography css={styles.title}>
          메뉴 선택 – Table
          {' '}
          {table}
        </Typography>
        <Container css={styles.list} maxWidth={false} disableGutters>
          <Container css={styles.btnMenuList} maxWidth={false} disableGutters>
            {(() => menu.map((data, index) => (
              <div key={index}>
                <BtnMenu
                  index={index}
                  menuName={data.menu_name}
                  menuPrice={data.menu_price}
                  menuStock={data.menu_stock}
                  onClick={() => {}} />
              </div>
            )))()}
          </Container>
        </Container>
        <Container css={styles.info} maxWidth={false} disableGutters />
      </Container>
    </>
  );
}
