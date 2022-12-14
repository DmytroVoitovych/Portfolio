import { useMedia } from "helpers/customHook/useMedia";
import { controlStyle } from "helpers/forApp/baseStyle";
import { controlScroll } from "helpers/forApp/controlScroll";
import { useState, useEffect } from "react";
import { usePrevious } from "react-delta";
import { Header, Hero, Project, Write, Footer, ContactMe, BtnUandD } from "./index";
import { useInView } from 'react-intersection-observer';


export const App = () => {
  
  const { burger, isMobile, tablet,all, desctop, extra } = useMedia();
  const [showModal, setShowModal] = useState(() => JSON.parse(window.localStorage.getItem('stateModal')) ?? false);
  const [location, setLocation] = useState(null);
  const [refAbout, setAbout] = useState(null);
  const [refProj, setProj] = useState(null);

  const { ref, inView } = useInView({threshold: 1});
  const prev = usePrevious(showModal);

  const funcToglle = () => { setShowModal(!showModal) };
 
  useEffect(() => {
    
    const id = setTimeout(() => {
    showModal && window.localStorage.setItem('stateModal', JSON.stringify(showModal));
    clearTimeout(id);
    }, 450);

    controlScroll(prev,location);
  
  });
  
 

  return (
    <>
      <div
        style={{...controlStyle, position: showModal || (inView && isMobile)?'fixed':'', overflowY: showModal ?'scroll':'auto', top: showModal?`-${location}px`:`` }}
    >
        <Header onOpen={setShowModal} setScroll={setLocation} loc={{ refAbout, refProj, ref }} media={{ burger, isMobile }} />
      <main>
          <Hero about={setAbout}  media={{ burger, isMobile, tablet,all }} />
          <Project proj={setProj} media={{ burger, isMobile, tablet,all, desctop }} />
          <Write onClose={funcToglle} toggle={showModal} setScroll={setLocation} media={{ burger, isMobile, tablet,all, desctop }} />
        </main>
        <Footer/>
        {showModal && <ContactMe onClose={funcToglle} toggle={showModal} media={{ burger, isMobile, tablet, extra}} />}
        {< BtnUandD /> }
      </div>
      
      </>
  );
};
