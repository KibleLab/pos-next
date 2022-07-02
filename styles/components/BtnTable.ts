import { css } from '@emotion/react';

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

export default styles;
