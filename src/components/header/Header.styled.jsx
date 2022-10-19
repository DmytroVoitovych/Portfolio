import styled from '@emotion/styled';



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
color: #ffffff;
`;

export const ListContact = styled.ul`
display: flex;
gap: 30px;
align-items: center;

li:nth-of-type(3) svg{
    border-radius: inherit;
    color: #000000;
    outline: 1px solid #FBFF22;
 }   

 li:nth-of-type(2) svg{
    
    color:#FBFF22;
 } 

`;

export const LinkContact = styled.a`
display:flex;
padding:12px;
border-radius: 50%;
background-color: rgba(251, 255, 34, 0.1);



`;

export const ListAbout = styled.ul`
display: flex;
gap: 30px;
align-items: center;
`;

export const Btn = styled.button`
padding: 15px;
border: 2px solid #FBFF22;
border-radius: 5px;
font-family: 'Poppins', sans-serif;
font-weight: 600;
font-size: 20px;
line-height: 1.5;
color: #FBFF22;
background-color: transparent;
`;