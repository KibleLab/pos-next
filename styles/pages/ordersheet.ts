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
  info: css`
    position: absolute;
    width: 660px;
    height: 994px;
    right: 0;
    top: 0;
    background: white;
  `
};

export default styles;
