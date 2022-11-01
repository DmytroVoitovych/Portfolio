import { Nav, Text, ListContact, LinkContact, ListAbout, Btn } from "./Header.styled";
import { colorsFontsDark } from "helpers/styleTemplate";
import { AiFillGithub, } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { ImTelegram } from 'react-icons/im';
import{TfiLinkedin} from 'react-icons/tfi';
import mus from '../../sound/put.mp3';

const {accent_dark__yellow } = colorsFontsDark;

export const Header = ({onOpen}) => {
    
const audio = new Audio(mus);
console.log(audio);
    return (
        <header>
            <Nav>
                <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
                    <Text>Find Me On</Text>
                    <IconContext.Provider value={{ size: '25px' }}>
                        <ListContact>
                            <li><LinkContact href="https://github.com/DmytroVoitovych" target={'_blank'} rel="noopener noreferrer">
                                <div style={{ backgroundColor: accent_dark__yellow, borderRadius: 'inherit', display: "flex" }}>
                                    <AiFillGithub />
                                </div></LinkContact></li>
                            <li><LinkContact href="https://www.linkedin.com/in/dmytro-voitovych/" target={'_blank'} rel="noopener noreferrer">
                                <div style={{ display: "flex" }}>
                                    <TfiLinkedin />
                                </div>
                            </LinkContact ></li>
                            <li><LinkContact href="https://t.me/dymaVoitovych" target={'_blank'} rel="noopener noreferrer">
                                <div style={{ backgroundColor: accent_dark__yellow, borderRadius: 'inherit', display: "flex" }}>
                                    <ImTelegram />
                                </div>
                            </LinkContact></li>
                        </ListContact>
                    </IconContext.Provider>
                </div>
                <div style={{ display: 'flex', gap:'40px'}}>
                    <ListAbout>
                        <li><a href="#id"><Text>Home</Text></a></li>
                        <li><a href="#About"><Text>About</Text></a></li>
                        <li><a href="#Project"><Text>Project</Text></a></li>
                    </ListAbout>
                    <Btn type='button' onClick={() => { audio.play(); return onOpen(true); } }>Contact Me</Btn>
                </div>
            </Nav>
        </header>
    );

};