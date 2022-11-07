import {subOne,subTwo,linkResume, nodeDesc } from "./helpers/description";
import { HeroSection, Hello, Iam, Prof, About, LinkHero, BtnHero } from "./Hero.styled";
import { Avatar } from "./avatar/Avatar";
import { Subtract } from "./customSymbols/Subtract";
import { useState } from "react";


export const Hero = () => {

    const [more, setMore] = useState(false);   

    
    return (
        <HeroSection>
            <div>
                <Hello>Hello!</Hello>
                <Iam id='About'><span style={{ color: '#ffffff' }}>I’m</span> Dmytro Voitovych</Iam>
                <Prof>Front-end developer</Prof>
                <About style={{overflowY: `${more && 'auto'}`}}>
                    {subOne}<span style={{ display: 'block',}}></span>{subTwo}
                    {more && <p style={{marginTop:'20px'}} ><Prof>Back-end developer</Prof>{nodeDesc}</p>}
                </About>
                <ul style={{display:'flex', gap:'30px'}}>
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
                <Avatar />
             </div>


        </HeroSection>

    );

};