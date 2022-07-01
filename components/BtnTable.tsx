import { Button, Container, Typography } from '@mui/material';
import { MouseEventHandler } from 'react';
import styles from '../styles/components/BtnTable';

interface IProps {
  index: number;
  table: number;
  tableName: string;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}

// dummy
const order = [
  { order_quantity: 1, menu_name: 'AAA', menu_price: 1000 },
  { order_quantity: 2, menu_name: 'BBB', menu_price: 2000 },
];

export default function BtnTable(props: IProps) {
  const { index, tableName, onClick } = props;
  return (
    <Container
      css={styles.btnTable(index)}
      maxWidth={false}
      component={Button}
      onClick={onClick}
      disableGutters>
      <Typography css={styles.tableName}>{tableName}</Typography>
      <Container css={styles.orderList} maxWidth={false} disableGutters>
        {(() => {
          return order.map((data, index) => (
            <Container
              key={index}
              css={styles.order(index)}
              maxWidth={false}
              disableGutters>
              <Typography css={styles.orderName}>{data.menu_name}</Typography>
              <Typography css={styles.orderQuantity}>
                ⨉{data.order_quantity}
              </Typography>
            </Container>
          ));
        })()}
      </Container>
    </Container>
  );
}
