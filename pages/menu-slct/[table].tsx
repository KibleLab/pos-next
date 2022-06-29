/** @jsxImportSource @emotion/react **/
import { css } from '@emotion/react';
import { AppBar, Button, Container, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import Image from 'next/image';
import BtnMenu from '../../components/BtnMenu';

// dummy
const menu = [
  { menu_name: 'AAA', menu_price: 1000, menu_stock: 20 },
  { menu_name: 'BBB', menu_price: 2000, menu_stock: 20 },
  { menu_name: 'CCC', menu_price: 3000, menu_stock: 20 },
  { menu_name: 'DDD', menu_price: 4000, menu_stock: 20 },
];

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
  appBarBtnMenuMgnt: css`
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
  appBarBtnBack: css`
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
  title: css`
    position: absolute;
    left: 32px;
    top: 30px;
    font-size: 36px;
    font-family: Roboto;
  `,
  list: css`
    position: absolute;
    width: 1260px;
    height: 920px;
    left: 0;
    bottom: 0;
  `,
  btnMenuList: css`
    position: absolute;
    width: 1220px;
    height: 856px;
    left: 32px;
    bottom: 32px;
    overflow-x: hidden;
    overflow-y: auto;
  `,
  info: css`
    position: absolute;
    width: 660px;
    height: 994px;
    right: 0;
    top: 0;
    background: white;
  `,
};
