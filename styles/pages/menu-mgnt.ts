import { css } from '@emotion/react';

const styles = {
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
    bottom: 0;
    background: white;
  `,
  infoTitle: css`
    position: absolute;
    left: 32px;
    top: 30px;
    font-size: 36px;
    font-family: Roboto;
  `,
  infoFooter: css`
    position: absolute;
    height: 880px;
    left: 0;
    top: 880px;
    border-top: 1px solid #ebebeb;
  `,
  btnAdd: css`
    position: absolute;
    width: 132px;
    height: 132px;
    left: 264px;
    top: 431px;
    padding: 0;
    border: 1px solid black;
    border-radius: 25px;
  `,
  addMenuName: css`
    position: absolute;
    width: 588px;
    height: 62px;
    left: 36px;
    top: 228px;
  `,
  addMenuPrice: css`
    position: absolute;
    width: 588px;
    height: 62px;
    left: 36px;
    top: 409px;
  `,
  addMenuStock: css`
    position: absolute;
    width: 588px;
    height: 62px;
    left: 36px;
    top: 590px;
  `,
  editMenuName: css`
    position: absolute;
    width: 588px;
    height: 62px;
    left: 36px;
    top: 228px;
  `,
  editMenuPrice: css`
    position: absolute;
    width: 588px;
    height: 62px;
    left: 36px;
    top: 409px;
  `,
  editMenuStock: css`
    position: absolute;
    width: 588px;
    height: 62px;
    left: 36px;
    top: 590px;
  `,
  btnDelete: css`
    position: absolute;
    right: 36px;
    top: 36px;
    font-size: 16px;
    background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
    &:hover {
      background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
      opacity: 0.8;
    }
  `,
  btnSummit: css`
    position: absolute;
    width: 474px;
    height: 114px;
    left: 0;
    top: 0;
    border-radius: 0px;
    font-size: 24px;
    font-weight: bold;
    color: #ffff00;
    background: linear-gradient(to right, #00d1ff 0%, #0066ff 100%);
    &:hover {
      background: linear-gradient(to right, #00d1ff 0%, #0066ff 100%);
      opacity: 0.8;
    }
  `,
  btnCancel: css`
    position: absolute;
    width: 186px;
    height: 114px;
    right: 0;
    top: 0;
    border-radius: 0px;
    font-size: 24px;
    color: #0066ff;
    background: #ffffff;
    &:hover {
      background: #ffffff;
      opacity: 0.8;
    }
  `,
};

export default styles;
