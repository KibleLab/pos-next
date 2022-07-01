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
  appBarBtnMenuSlct: css`
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
  info: css`
    position: absolute;
    width: 660px;
    height: 994px;
    right: 0;
    top: 0;
    background: white;
  `,
};

export default styles;
