import {subOne,subTwo,linkResume, nodeDesc } from "./helpers/description";
import { HeroSection, Hello, Iam, Prof, About, LinkHero, BtnHero, descSmall, tabletHero, end } from "./Hero.styled";
import { Avatar } from "./avatar/Avatar";
import { Subtract } from "./customSymbols/Subtract";
import { useRef, useState } from "react";
import { useEffect } from "react";


export const Hero = ({about, media}) => {
    
    const {burger, all, tablet, isMobile } = media;
    const [more, setMore] = useState(false);   
    const locate = useRef(null);
    
    useEffect(()=>
    about(locate.current.offsetTop)
    );

    return (
        <HeroSection
            style={{ gap: ((!burger && !all) || isMobile) && '1px', justifyContent: (!burger && !all) && 'space-evenly',  flexDirection: burger && 'column-reverse' }}
            css={(!isMobile && burger) && tabletHero}
        >
            <div style={{textAlign: isMobile && "center"}}>
                <Hello>Hello!</Hello>
                <Iam ref={locate} style={{fontSize: (!burger && !all) && '36px' }} id='About'>
                    <span style={{ color: '#ffffff',}}>I’m</span> Dmytro Voitovych
                </Iam>
                <Prof style={{fontSize: (!burger && !all) && '28px' }}>Front-end developer</Prof>
                <About style={{overflowY: `${more && 'auto'}`}}  css={(!burger && !all) &&  descSmall} >
                    {subOne}<span style={{ display: 'block',}}></span>{subTwo}
                    {more && <span style={{marginTop:'20px', display:'block'}} ><Prof css={ isMobile && end}>Back-end developer</Prof>{nodeDesc}</span>}
                </About>
                <ul style={{display:'flex', gap: tablet?'10px':'30px', flexDirection: isMobile && "column", alignItems: isMobile && "center"} }>
                    <li>
                        <LinkHero
                            href={linkResume}
                            download="DmytroVoitovych_Frontend.pdf"
                            target={'_blank'}
                            rel="noopener noreferrer"
                        >
                           <Subtract/> Download CV
                        </LinkHero>
                     
                    </li>
                    <li>
                        <BtnHero
                            type={'button'}
                            onClick={() => setMore(!more)}>{more ? 'Hide' : 'More'}
                        </BtnHero>
                    </li>
                </ul>
            </div>
            
            <div style={{position:'relative'}}>
                <Avatar media={{burger, all, tablet, isMobile}} />
             </div>


        </HeroSection>

    );

};