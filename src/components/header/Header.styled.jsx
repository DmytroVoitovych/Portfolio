import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { colorsFontsDark, colorsBackgroundDark, colorsBorderDark, cubik } from "helpers/styleTemplate";
const { accent_dark__yellow, main_dark__white, support_dark__black, second_dark__grey } = colorsFontsDark;
const { decor_dark__transparentBg, support_dark__yellovOpacityBg } = colorsBackgroundDark;
const {main_dark__yellowBd, second_dark__whiteBd} = colorsBorderDark;

export const Nav = styled.nav`

display: flex;
justify-content: space-between;
align-items: center;
padding: 40px 0;
`;

export const Text = styled.p`
font-family: 'Poppins', sans-serif;
font-weight: 600;
font-size: 20px;
line-height: 1.5;
color: ${main_dark__white};

`;

export const ListContact = styled.ul`
display: flex;
gap: 30px;
align-items: center;

li:nth-of-type(3) svg{
    border-radius: inherit;
    color: ${support_dark__black};
    outline: 1px solid ${accent_dark__yellow};
 }

 li:nth-of-type(2) svg{
    color: ${accent_dark__yellow};
 }
`;

export const LinkContact = styled.a`
display:flex;
padding:12px;
border-radius: 50%;
background-color: ${support_dark__yellovOpacityBg};
transition: background-color ${cubik}, outline ${cubik};

:hover
{
 background-color: ${second_dark__grey};
  outline: 3px solid ${main_dark__yellowBd};
}

:hover  div{
 outline: 3px solid ${main_dark__yellowBd};
}

`;

export const ListAbout = styled.ul`
display: flex;
gap: 30px;
align-items: center;

a:hover p{
 transition: color ${cubik},text-decoration ${cubik};
 color:${accent_dark__yellow};
 text-decoration: underline;
}

a:focus  p{
 transition: color ${cubik},text-decoration ${cubik};
 color:${accent_dark__yellow};
 text-decoration: underline;
}
`;

export const Btn = styled.button`
padding: 15px;
border: 2px solid ${main_dark__yellowBd};
border-radius: 5px;
font-family: 'Poppins', sans-serif;
font-weight: 600;
font-size: 20px;
line-height: 1.5;
color: ${accent_dark__yellow};
background-color: ${decor_dark__transparentBg};
cursor: pointer;
transition: color ${cubik}, border ${cubik};

:hover,
:focus-visible {
color:${main_dark__white};
border: 2px solid ${second_dark__whiteBd};
transition: color ${cubik}, border ${cubik};

:active{
color:${accent_dark__yellow};
border: 2px solid ${main_dark__yellowBd};
}
}
`;

export const menu = css`

fill: ${accent_dark__yellow};
z-index: 9999;
cursor: pointer;

:active{
 fill: ${main_dark__white};
}
`;

export const blockMenu = css`
   position: fixed;
    display: block;
    top: 0;
    right: 0;
    padding: 90px 40px;
    flex-direction: column-reverse;
    background-color: #131313;
    z-index: 4;


`;

export const dow = css`
position: fixed;
    top: 20px;
    right: 30px;
`;

export const liline = css`
flex-direction: column;
text-align: center;
gap: 0;

li{
width: 152%;
border-top: 1px solid ${support_dark__yellovOpacityBg};
padding: 15px 0;
}

li:last-child{
border-bottom: 1px solid ${support_dark__yellovOpacityBg};
}

`;

export const mobmenu = css`


    z-index: 5;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: fixed;


`;

export const mobCon = css`bottom:0; left:0`;
