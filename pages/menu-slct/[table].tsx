import { AppBar, Button, Container, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from '../../styles/pages/menu-slct';
import menu from '../../mocks/pages/menu-slct';
import BtnMenu from '../../components/BtnMenu';

export default function MenuSlct() {
  const router = useRouter();
  const { table } = router.query;
  return (
    <>
      <AppBar css={styles.appBar} elevation={1}>
        <Button css={styles.appBarTitle} onClick={() => router.push(`/`)}>
          <Image src='/images/title.svg' width={319} height={58} />
        </Button>
        <Button
          css={styles.appBarBtnMenuMgnt}
          onClick={() => router.push(`/menu-mgnt`)}>
          메뉴 관리
        </Button>
        <Button css={styles.appBarBtnBack} onClick={() => router.back()}>
          <Image src='/images/back.svg' width={24} height={24} />
        </Button>
      </AppBar>
      <Container css={styles.contents} maxWidth={false} disableGutters>
        <Typography css={styles.title}>메뉴 선택 – Table {table}</Typography>
        <Container css={styles.list} maxWidth={false} disableGutters>
          <Container css={styles.btnMenuList} maxWidth={false} disableGutters>
            {(() => {
              return menu.map((data, index) => (
                <div key={index}>
                  <BtnMenu
                    index={index}
                    menuName={data.menu_name}
                    menuPrice={data.menu_price}
                    menuStock={data.menu_stock}
                    onClick={() => {}}
                  />
                </div>
              ));
            })()}
          </Container>
        </Container>
        <Container css={styles.info} maxWidth={false} disableGutters />
      </Container>
    </>
  );
}
