import {subOne,subTwo,linkResume } from "./helpers/description";
import { HeroSection, Hello, Iam, Prof, About, LinkHero, BtnHero } from "./Hero.styled";
import { Avatar } from "./avatar/Avatar";
import { Subtract } from "./customSymbols/Subtract";

export const Hero = () => {
    
    return (
        <HeroSection>
            <div>
                <Hello>Hello!</Hello>
                <Iam id='About'><span style={{ color: '#ffffff' }}>I’m</span> Dmytro Voitovych</Iam>
                <Prof>Front-end developer</Prof>
                <About >{subOne}<span style={{ display: 'block' }}></span>{subTwo}</About>
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
                        <BtnHero type={'button'}>More</BtnHero>
                    </li>
                </ul>
            </div>
            
            <div style={{position:'relative'}}>
               <Avatar/>
            </div>


        </HeroSection>

    );

};