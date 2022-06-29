/** @jsxImportSource @emotion/react **/
import { css } from '@emotion/react';
import { Button, Container, Typography } from '@mui/material';
import { MouseEventHandler } from 'react';

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

const styles = {
  btnTable: (index: number) => css`
    position: absolute;
    width: 440px;
    height: 449px;
    left: ${(index % 4) * 32 + (index % 4) * 440}px;
    top: ${Math.floor(index / 4) * 32 + Math.floor(index / 4) * 449}px;
    padding: 0;
    background: #ffd1d1;
    &:hover {
      background: #ffd1d1;
      opacity: 0.8;
    }
  `,
  tableName: css`
    position: absolute;
    left: 16px;
    top: 16px;
    font-family: Roboto;
    font-size: 28px;
    font-weight: bold;
    color: black;
  `,
  orderList: css`
    position: absolute;
    width: 440px;
    height: 380px;
    left: 0;
    top: 60px;
    overflow-y: auto;
  `,
  order: (index: number) => css`
    position: absolute;
    width: 403px;
    height: 33px;
    left: 16px;
    top: ${(index + 1) * 9 + index * 33}px;
  `,
  orderName: css`
    position: absolute;
    height: 33px;
    left: 0;
    top: 0;
    font-family: Roboto;
    font-size: 24px;
    color: black;
  `,
  orderQuantity: css`
    position: absolute;
    height: 33px;
    right: 0;
    top: 0;
    font-family: Roboto;
    font-size: 24px;
    color: red;
  `,
};
