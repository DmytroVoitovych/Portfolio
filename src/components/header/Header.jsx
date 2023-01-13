import {
  Nav,
  Text,
  ListContact,
  LinkContact,
  ListAbout,
  Btn,
  menu,
  blockMenu,
  dow,
  liline,
  mobmenu,
  mobCon,
} from './Header.styled';
import { colorsFontsDark } from 'helpers/styleTemplate';
import { AiFillGithub, AiFillCloseCircle } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { ImTelegram } from 'react-icons/im';
import { GiHamburgerMenu } from 'react-icons/gi';
import { TfiLinkedin } from 'react-icons/tfi';
import mus from '../../sound/put.mp3';
import { animateScroll as scroll } from 'react-scroll';
import { useState } from 'react';

const { accent_dark__yellow } = colorsFontsDark;

export const Header = ({ onOpen, setScroll, loc, media }) => {
  const [toggle, setToggle] = useState(false);
  const { burger, isMobile } = media;

  const audio = new Audio(mus);

  return (
    <header>
      <Nav>
        <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
          <Text>Find Me On</Text>
          <IconContext.Provider value={{ size: '25px' }}>
            {(!isMobile || toggle) && (
              <ListContact css={isMobile && mobmenu}>
                <li ref={loc.ref}>
                  <LinkContact
                    href="https://github.com/DmytroVoitovych"
                    target={'_blank'}
                    rel="noopener noreferrer"
                  >
                    <div
                      style={{
                        backgroundColor: accent_dark__yellow,
                        borderRadius: 'inherit',
                        display: 'flex',
                      }}
                    >
                      <AiFillGithub />
                    </div>
                  </LinkContact>
                </li>
                <li>
                  <LinkContact
                    href="https://www.linkedin.com/in/dmytro-voitovych/"
                    target={'_blank'}
                    rel="noopener noreferrer"
                  >
                    <div style={{ display: 'flex' }}>
                      <TfiLinkedin />
                    </div>
                  </LinkContact>
                </li>
                <li>
                  <LinkContact
                    href="https://t.me/dymaVoitovych"
                    target={'_blank'}
                    rel="noopener noreferrer"
                  >
                    <div
                      style={{
                        backgroundColor: accent_dark__yellow,
                        borderRadius: 'inherit',
                        display: 'flex',
                      }}
                    >
                      <ImTelegram />
                    </div>
                  </LinkContact>
                </li>
              </ListContact>
            )}
          </IconContext.Provider>
        </div>
        {!burger || toggle ? (
          <div
            style={{ display: 'flex', gap: '40px' }}
            css={toggle && burger && [blockMenu, isMobile && mobCon]}
          >
            <ListAbout css={burger && liline}>
              <li>
                <a
                  href="#id"
                  onClick={() => {
                    scroll.scrollTo(0, { smoth: true });
                    isMobile && setToggle(!toggle);
                  }}
                >
                  <Text>Home</Text>
                </a>
              </li>
              <li>
                <a
                  href="#About"
                  onClick={() => {
                    scroll.scrollTo(loc.refAbout, { smoth: true });
                    isMobile && setToggle(!toggle);
                  }}
                >
                  <Text>About</Text>
                </a>
              </li>
              <li>
                <a
                  href="#Project"
                  onClick={() => {
                    scroll.scrollTo(loc.refProj, { smoth: true });
                    isMobile && setToggle(!toggle);
                  }}
                >
                  <Text>Project</Text>
                </a>
              </li>
            </ListAbout>
            <Btn
              type="button"
              onClick={() => {
                setScroll(window.scrollY);
                audio.play();
                return onOpen(true);
              }}
            >
              Contact Me
            </Btn>
          </div>
        ) : (
          <GiHamburgerMenu
            size="30px"
            css={menu}
            onClick={e => setToggle(!toggle)}
          />
        )}
        {toggle && burger && (
          <AiFillCloseCircle
            size="30px"
            css={[menu, dow]}
            onClick={e => setToggle(!toggle)}
          />
        )}
      </Nav>
    </header>
  );
};
