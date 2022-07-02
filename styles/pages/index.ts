import { css } from '@emotion/react';

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
  appBarBtnDailySales: css`
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
    left: 0px;
    top: 86px;
  `,
  btnTableList: css`
    position: absolute;
    width: 1880px;
    height: 930px;
    left: 32px;
    top: 32px;
    overflow-x: hidden;
    overflow-y: auto;
  `,
};

export default styles;
