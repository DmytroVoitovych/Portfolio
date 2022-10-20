import { Btn } from "components/header/Header.styled";
import {Title } from "components/Projects/Projects.styled";
import { size, fill, box } from "./Write.styled";



export const Write = () => {
  
    return (

<section style={{paddingBottom:'168px'}}>
      <div style={{position:'relative', }}>
                <Title css={size} >SAY HI</Title>
                <div css={box}>
                <p css={fill}>Say Hi! and let’s create something together.</p>
                    <Btn type='button'>Contact Me</Btn>
                    </div>
      </div>      
</section>

    );    



};