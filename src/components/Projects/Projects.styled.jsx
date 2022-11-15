import { css } from "@emotion/react";
import styled  from "@emotion/styled";


export const Title = styled.h2`
font-family: 'Poppins', sans-serif;
font-weight: 600;
font-size: 200px;
line-height: 1.5;
-webkit-text-stroke: 1px rgba(153, 153, 153, 0.3);
 color: transparent;
text-align:center;
`;

export const Desc = styled.span`
position:absolute;
top:50%;
left:50%;
transform: translate(-50%,-50%);

font-family: 'Poppins', sans-serif;
font-weight: 600;
font-size: 40px;
line-height: 1.5;
color: #FBFF22;

`;

export const InfoBox = styled.ul`
text-align:center;
margin-bottom:117px;


li:not(:last-child){
margin-bottom:73px;
}

li{
display:inline-flex;
align-items:center;
padding: 66px 155px 40px 46px;    
border: 1px solid rgba(255, 255, 255, 0.05);
border-radius: 20px;
background-color: #131313;
gap: 30px;



p{
font-family: 'Poppins',sans-serif;
font-weight: 600;
font-size: 32px;
line-height: 1.5;
color:#ffffff;
max-width:200px;
margin-bottom:30px;
}
span{
color: #FBFF22;
}

button{
padding: 18px 39px;
background-color: #FBFF22;
border-radius: 5px;   

color: #000000;
font-family: 'Poppins',sans-serif;
font-weight: 600;
font-size: 20px;
line-height: 1.5;
border: none;
cursor: pointer;
transition: 250ms cubic-bezier(.36,.97,.76,.18);

:hover,:focus{
outline: 1px solid #FBFF22;
color: #FBFF22;
background-color: rgba(153, 153, 153, 0.3);
}

:active{
 background-color: #ffffff; 
}
}

img{
    border-radius:5px;
    max-width:100%;
    width:631px;
    max-height: 323px;
    min-height: 323px;

    
}

div:first-child{
   border-radius:5px;
   max-height: 323px;
   height: 323px;
  

 video{
    display:none;
    max-width:100%;
    width:631px;
    border-radius:5px;
   width:631px;
   object-fit: cover;
   min-height: 323px;
 }

}

div{
text-align:start;
}


}
`;

export const See = styled.button`
display:block;
margin-left: auto;
margin-right: auto;
padding: 18px 54px;
background-color: #FBFF22;
border-radius: 5px;   

color: #000000;
font-family: 'Poppins',sans-serif;
font-weight: 600;
font-size: 20px;
line-height: 1.5;
border: none;
cursor: pointer;

:hover,:focus{
outline: 1px solid #FBFF22;
color: #FBFF22;
background-color: rgba(153, 153, 153, 0.3);
}

:active{
 background-color: #ffffff; 
}
`;

export const inf = css`
width:631px;
max-width:100%;

font-family: 'Poppins',sans-serif;
    font-size: 20px;
    line-height: 30px;
    text-align: justify;
    color: #999999;

`;


export const Block = styled.div`
display:block;
height: auto!important;

`;

export const olList = css`

    display: flex;
    flex-direction: column;
    gap: 14px;
    align-items: start;
    margin-top: 14px;

ol{
  padding:0;
  display:flex;
  align-items: center;
  max-width: 200px;
  width:100%;
  justify-content: space-between;
  
  span{
    color:#FBFF22;
  }
}

`;