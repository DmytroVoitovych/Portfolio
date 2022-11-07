import styled  from "@emotion/styled";

import { colorsFontsDark, colorsBorderDark, cubik } from "helpers/styleTemplate";
const { accent_dark__yellow, main_dark__white} = colorsFontsDark;
const {main_dark__yellowBd, second_dark__whiteBd} = colorsBorderDark;

export const HeroSection = styled.section`
display: flex;
justify-content: space-between;
padding-top: 108px;
padding-bottom: 34px;
padding-right:15px;
gap:140px;

`;

export const Hello = styled.span`
display:block;
font-family: 'Poppins', sans-serif;
font-weight: 600;
font-size: 36px;
line-height: 1.5;
color: #FFFFFF;
margin-bottom: 10px;
`;

export const Iam = styled.h1`
font-family: 'Poppins', sans-serif;
font-weight: 600;
font-size: 52px;
line-height: 1.5;
margin-bottom: 10px;
color: #FBFF22;
`;

export const Prof = styled.span`
font-family: 'Poppins', sans-serif;
font-weight: 500;
font-size: 30px;
line-height: 1.5;
color: #999999;

::after {
   display: block;
    content: ' ';
    width: 76px;
    border-top: 3px solid #999999;
    border-radius: 2px;
    background-color: #999999;
    margin-top: 35px;
    margin-bottom: 20px;
}

`;

export const About = styled.p`
font-family: 'Poppins', sans-serif;
font-size: 20px;
line-height: 30px;
text-align: justify;
color: #999999;

max-width: 619px;
margin-bottom: 50px;
`;

export const LinkHero = styled.a`
display:flex;
align-items:center;

font-family: 'Poppins', sans-serif;
font-weight: 600;
font-size: 20px;
line-height: 1.5;
color: #000000;

padding: 15px 20px;
background: #FBFF22;
border-radius: 5px;
transition: color ${cubik}, border ${cubik}, background-color ${cubik} ;

:hover,
:focus {
color:${accent_dark__yellow};
background-color: ${main_dark__white};
border: 2px solid ${main_dark__yellowBd};
}



`;

export const BtnHero = styled.button`
border: 1px solid #FFFFFF;
border-radius: 5px;
padding: 14px 74.5px;

font-family: 'Poppins', sans-serif;
font-weight: 600;
font-size: 20px;
line-height: 1.5;
color: #ffffff;
background-color: transparent;
transition: color ${cubik}, border ${cubik};
cursor: pointer;


:hover,
:focus {
color:${accent_dark__yellow};
border: 2px solid ${main_dark__yellowBd};

}

:active{
 color:${main_dark__white};
border: 2px solid ${second_dark__whiteBd};   
}
`;