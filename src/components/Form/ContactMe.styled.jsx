import overlay from '../../img/overlay.jpg';
import textCursor from '../../img/ibeam.svg';
import { colorsFontsDark, colorsBackgroundDark, colorsBorderDark, cubik } from "../../helpers/styleTemplate";
const { accent_dark__yellow, main_dark__white, } = colorsFontsDark;
const {  main_dark__blackBg, } = colorsBackgroundDark;
const {main_dark__yellowBd, second_dark__whiteBd} = colorsBorderDark;
const { css } = require("@emotion/react");


const over = css`
width: 100vw;
height: 100vh;

position: fixed;
left: 0;
bottom:0;
right:0;
    background-color: ${main_dark__blackBg};
background-repeat: no-repeat;
background-size: cover;
background-image: url('${overlay}');
z-index: 999;
`;

const form = css`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
transform: translate(-50%, -50%);
padding: 25px 51px 105px 51px;

background: linear-gradient(219.11deg, rgba(0, 0, 0, 0.066) 22.82%, rgba(255, 255, 255, 0.14) 47.12%, rgba(0, 0, 0, 0) 67.06%), rgba(255, 255, 255, 0.1);
border: 1px solid rgba(255, 255, 255, 0.62);
backdrop-filter: blur(2.5px);
border-radius: 12px;

input,
textarea{
background: rgba(255, 255, 255, 0.21);
backdrop-filter: blur(10px);
border-radius: 12px;
cursor: url('${textCursor}') 200 200, text;   
padding: 8px 9px;
caret-color: ${main_dark__white};
color: ${main_dark__white};


}

textarea {
 resize: none;   
}



`;

const inputBox = css`
display: grid;
gap: 24px;
grid-template-columns: minmax(0,378px);
grid-template-rows: 37px 37px;

`;

const logo = css`
display: flex;
align-items:center;
justify-content:center;

width:129px;
height:129px;
border-radius: 50%;
margin: auto;
margin-bottom: 65px;

background-color: rgba(251, 255, 34, .3);
border: 1px solid rgba(255, 255, 255, 0.62);


span{
font-family: 'Poppins', sans-serif;
font-weight: 400;    
font-size: 24px;
line-height: 1.69; 

color: rgba(255, 255, 255, 0.62);

}

`;

const submit = css`
position: absolute;
bottom: 24px;
left: 50%;
transform: translateX(-50%);

border: 1px solid ${second_dark__whiteBd};
padding: 8px 9px;

font-family: 'Poppins', sans-serif;
font-weight: 400;
font-size: 19px;
line-height: 1.2;
color: ${main_dark__white};
border-radius: 12px;

background-color: rgba(251, 255, 34, .3);
backdrop-filter: blur(10px);
cursor: pointer;
transition: color ${cubik}, border ${cubik};

:hover,
:focus {
color:${accent_dark__yellow};
border: 1px solid ${main_dark__yellowBd};

:active{
color:${main_dark__white};
border: 1px solid ${second_dark__whiteBd};    
}
}
`;

const subDisabled = css`
position: absolute;
bottom: 24px;
left: 50%;
transform: translateX(-50%);

border: 1px solid grey;
padding: 8px 9px;

font-family: 'Poppins', sans-serif;
font-weight: 400;
font-size: 19px;
line-height: 1.2;
color: ${main_dark__white};
border-radius: 12px;

background-color: grey;
backdrop-filter: blur(10px);
cursor:not-allowed;
`;  
export {over, form, inputBox, logo, submit , subDisabled};