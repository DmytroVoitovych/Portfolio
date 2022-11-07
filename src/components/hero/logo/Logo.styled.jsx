import { css, keyframes } from '@emotion/react';

const roll = keyframes`
  from{
    transform:rotate(0deg)
  }
  to{
    transform:rotate(360deg)
  }
`;

export const main = css`
  top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;

  display:flex;
  justify-content:center;
  align-items:center;
  position:absolute;
  animation: ${roll} 15s linear 0.5s infinite;

div:nth-of-type(1){
  position:absolute;
  height:12vw;width:4vw;
  border-radius:50%;
  border:0.6vw solid #FBFF22;
  transform:rotate(30deg);
}
  

div:nth-of-type(2){
  position:absolute;
  height:12vw;width:4vw;
  border-radius:50%;
  border:0.6vw solid #FBFF22;
  transform:rotate(-30deg)
}
div:nth-of-type(3){
  position:absolute;
  height:12vw;width:4vw;
  border-radius:50%;
  border:0.6vw solid #FBFF22;
  transform:rotate(90deg)
}
div:nth-of-type(4){
  position:absolute;
  width:2.5vw;
  height:2.5vw;
  border-radius:50%;
  background-color:#FBFF22;
}
`;


