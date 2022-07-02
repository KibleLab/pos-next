import { Button, Container, Typography } from '@mui/material';
import { MouseEventHandler } from 'react';
import styles from '../styles/components/BtnMenu';

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
