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
}

img{
    border-radius:5px;
    max-width:100%;
    width:631px;
    max-height: 323px;
    min-height: 323px;
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
`;