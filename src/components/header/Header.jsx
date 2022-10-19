import { Nav, Text, ListContact, LinkContact, ListAbout, Btn } from "./Header.styled";
import { AiFillGithub, } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { ImTelegram } from 'react-icons/im';
import{TfiLinkedin} from 'react-icons/tfi';


export const Header = () => {
     


    return (
        <header>
            <Nav>
                <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
                    <Text>Find Me On</Text>
                    <IconContext.Provider value={{ size: '25px' }}>
                        <ListContact>
                            <li><LinkContact href="https://github.com/DmytroVoitovych" target={'_blank'} rel="noopener noreferrer">
                                <div style={{ backgroundColor: '#FBFF22', borderRadius: 'inherit', display: "flex" }}>
                                    <AiFillGithub />
                                </div></LinkContact></li>
                            <li><LinkContact href="https://www.linkedin.com/in/dmytro-voitovych/" target={'_blank'} rel="noopener noreferrer">
                                <div style={{ display: "flex" }}>
                                    <TfiLinkedin />
                                </div>
                            </LinkContact ></li>
                            <li><LinkContact href="https://t.me/dymaVoitovych" target={'_blank'} rel="noopener noreferrer">
                                <div style={{ backgroundColor: '#FBFF22', borderRadius: 'inherit', display: "flex" }}>
                                    <ImTelegram />
                                </div>
                            </LinkContact></li>
                        </ListContact>
                    </IconContext.Provider>
                </div>
                <div style={{ display: 'flex', gap:'40px'}}>
                    <ListAbout>
                        <li><a href="#"><Text>Home</Text></a></li>
                        <li><a href="#"><Text>About</Text></a></li>
                        <li><a href="#"><Text>Project</Text></a></li>
                    </ListAbout>
                    <Btn type='button'>Contact Me</Btn>
                </div>
            </Nav>
        </header>
    );

};