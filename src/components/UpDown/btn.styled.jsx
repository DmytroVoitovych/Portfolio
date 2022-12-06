import { css } from '@emotion/react';
import { colorsFontsDark, colorsBackgroundDark, } from "helpers/styleTemplate";
const { accent_dark__yellow} = colorsFontsDark;
const {support_dark__yellovOpacityBg } = colorsBackgroundDark;


const up = css`

    border: none;
    background: none;
    cursor: pointer;
    position: fixed;
    bottom: 70px;
    right: 70px;
    opacity: 1;
    visibility: visible;
    transition: bottom 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) ;
    
    svg {
    width: 60px;
    height: 60px;

    fill: ${support_dark__yellovOpacityBg};
    stroke: ${accent_dark__yellow};
    transition: stroke 250ms;
}

:hover svg {
  scale: 1.3;
  fill: ${accent_dark__yellow};
}

`;


const down = css`
    opacity: 1;
    visibility: visible;
    border: none;
    background: none;
    cursor: pointer;
    position: absolute;
    top: 125px;
    right: 70px;
    transform: rotate(180deg);
  
  svg {
    width: 60px;
    height: 60px;

    fill: ${support_dark__yellovOpacityBg};
    stroke: ${accent_dark__yellow};
    transition: stroke 250ms;
  
}

:hover svg {
  scale: 1.3;
  fill: ${accent_dark__yellow};
}
`;

export {up, down };