import { css } from '@emotion/react';

const tabletka = css`
  flex-direction: column;
  padding-right: 20px !important;
  padding-left: 20px !important;
`;

const tabletMore = css`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const pmob = css`
  max-width: 160px;
  text-align: center;
`;

const lanccape = css`
  @media screen and (max-height: 600px) and (orientation: landscape) {
    height: 100vh;
    width: 100vw !important;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

export { tabletka, tabletMore, pmob, lanccape };
