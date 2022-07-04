import { Button, Container, TextField, Typography } from '@mui/material';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useState } from 'react';
import styles from '../../styles/pages/menu-mgnt';
import menu from '../../mocks/pages/menu-mgnt';
import BtnMenu from '../../components/BtnMenu';
import NavBar from '../../components/NavBar';

export default function MenuMgnt() {
  const router = useRouter();
  const [data, setData] = useState({
    menu_name: '',
    menu_price: 0,
    menu_stock: 0,
  });
  const [infoMode, setInfoMode] = useState(0);
  const { menu_name, menu_price, menu_stock } = data;
  return (
    <>
      <NavBar nameArr={['null', 'back']} />
      <Container css={styles.contents} maxWidth={false} disableGutters>
        <Typography css={styles.title}>메뉴 관리 – {menu.length}개</Typography>
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
                    onClick={() => {
                      setData(data);
                      setInfoMode(2);
                    }}
                  />
                </div>
              ));
            })()}
          </Container>
        </Container>
        <Container css={styles.info} maxWidth={false} disableGutters>
          {(() => {
            if (infoMode === 0) {
              return (
                <Button
                  css={styles.btnAdd}
                  onClick={() => {
                    setInfoMode(1);
                  }}>
                  <Image src='/images/plus.svg' width={40} height={40} />
                </Button>
              );
            }
            if (infoMode === 1) {
              return (
                <>
                  <Typography css={styles.infoTitle}>메뉴추가</Typography>
                  <TextField
                    css={styles.addMenuName}
                    label='메뉴명 입력'
                    onChange={(e) => {
                      setData({ ...data, menu_name: e.target.value });
                    }}
                    variant='outlined'
                  />
                  <TextField
                    css={styles.addMenuPrice}
                    label='단가 입력'
                    onChange={(e) => {
                      setData({ ...data, menu_price: Number(e.target.value) });
                    }}
                    variant='outlined'
                  />
                  <TextField
                    css={styles.addMenuStock}
                    label='재고 입력'
                    type='number'
                    InputProps={{ inputProps: { min: 0 } }}
                    onChange={(e) => {
                      setData({ ...data, menu_stock: Number(e.target.value) });
                    }}
                    variant='outlined'
                  />
                  <Container
                    css={styles.infoFooter}
                    maxWidth={false}
                    disableGutters>
                    <Button css={styles.btnSummit}>
                      {(() => {
                        if (!menu_name) return '추가';
                        return `추가 - ${menu_name}`;
                      })()}
                    </Button>
                    <Button
                      css={styles.btnCancel}
                      onClick={() => {
                        setInfoMode(0);
                      }}>
                      취소
                    </Button>
                  </Container>
                </>
              );
            }
            if (infoMode === 2) {
              return (
                <>
                  <Typography css={styles.infoTitle}>메뉴수정</Typography>
                  <Button
                    css={styles.btnDelete}
                    startIcon={<DeleteForeverOutlinedIcon />}
                    variant='contained'>
                    메뉴삭제
                  </Button>
                  <TextField
                    css={styles.editMenuName}
                    label='메뉴명 수정'
                    value={menu_name}
                    InputLabelProps={{ shrink: true }}
                    onChange={(e) => {
                      setData({ ...data, menu_name: e.target.value });
                    }}
                    variant='outlined'
                  />
                  <TextField
                    css={styles.editMenuPrice}
                    label='단가 수정'
                    value={menu_price}
                    InputLabelProps={{ shrink: true }}
                    onChange={(e) => {
                      setData({ ...data, menu_price: Number(e.target.value) });
                    }}
                    variant='outlined'
                  />
                  <TextField
                    css={styles.editMenuStock}
                    label='재고 수정'
                    type='number'
                    value={menu_stock}
                    InputLabelProps={{ shrink: true }}
                    InputProps={{ inputProps: { min: 0 } }}
                    onChange={(e) => {
                      setData({ ...data, menu_stock: Number(e.target.value) });
                    }}
                    variant='outlined'
                  />
                  <Container
                    css={styles.infoFooter}
                    maxWidth={false}
                    disableGutters>
                    <Button css={styles.btnSummit}>
                      {(() => {
                        if (!menu_name) return '수정';
                        return `수정 - ${menu_name}`;
                      })()}
                    </Button>
                    <Button
                      css={styles.btnCancel}
                      onClick={() => {
                        setInfoMode(0);
                      }}>
                      취소
                    </Button>
                  </Container>
                </>
              );
            }
            return null;
          })()}
        </Container>
      </Container>
    </>
  );
}
