import { Btn } from "components/header/Header.styled";
import {Title } from "components/Projects/Projects.styled";
import { size, fill, box } from "./Write.styled";



export const Write = ({onClose, toggle,setScroll, media}) => {

 const { all, tablet , isMobile } = media;
    
    return (

        <section style={{ paddingBottom: '168px', marginTop: (tablet || isMobile) && '20px' }}>
            <div style={{ position: 'relative', }}>
                <Title css={size} style={{fontSize: !all && '14vw' }} >SAY HI</Title>
                <div css={box}>
                    <p css={fill} style={{ fontSize: !all && '3vw' }}  >Say Hi! and let’s create something together.</p>
                    <Btn type='button' 
                        onClick={(e) => {
                        setScroll(window.scrollY);
                        onClose(!toggle);
                    }}>Contact Me</Btn>
                </div>
            </div>
        </section>

    );   



};