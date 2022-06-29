/** @jsxImportSource @emotion/react  **/
import { css } from '@emotion/react';
import { Button, Container, Typography } from '@mui/material';
import { MouseEventHandler } from 'react';

interface IProps {
  index: number;
  menuName: string;
  menuPrice: number;
  menuStock: number;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}

export default function BtnMenu(props: IProps) {
  const { index, menuName, menuStock, menuPrice, onClick } = props;
  return (
    <Container
      css={styles.btnMenu(index)}
      maxWidth={false}
      onClick={onClick}
      component={Button}
      disableGutters>
      <Typography css={styles.menuName}>{menuName}</Typography>
      <Typography css={styles.menuStock}>재고: {menuStock}</Typography>
      <Typography css={styles.menuPrice}>{menuPrice}원</Typography>
    </Container>
  );
}

const styles = {
  btnMenu: (index: number) => css`
    position: absolute;
    width: 275px;
    height: 190px;
    left: ${(index % 4) * 32 + (index % 4) * 275}px;
    top: ${Math.floor(index / 4) * 32 + Math.floor(index / 4) * 190}px;
    padding: 0;
    border-radius: 15px;
    background: #ffc37c;
    &:hover {
      background: #ffc37c;
      opacity: 0.8;
    }
  `,
  menuName: css`
    position: absolute;
    left: 20px;
    top: 20px;
    font-family: Roboto;
    font-size: 24px;
    color: black;
  `,
  menuStock: css`
    position: absolute;
    left: 20px;
    bottom: 20px;
    font-family: Roboto;
    font-size: 20px;
    color: black;
  `,
  menuPrice: css`
    position: absolute;
    right: 20px;
    bottom: 20px;
    font-family: Roboto;
    font-size: 20px;
    color: red;
  `,
};
