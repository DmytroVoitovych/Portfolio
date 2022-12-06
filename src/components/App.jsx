import { controlStyle } from "helpers/forApp/baseStyle";
import { controlScroll } from "helpers/forApp/controlScroll";
import { useState, useEffect } from "react";
import { usePrevious } from "react-delta";
import { Header, Hero, Project, Write, Footer, ContactMe, BtnUandD } from "./index";


export const App = () => {
  
  const [showModal, setShowModal] = useState(() => JSON.parse(window.localStorage.getItem('stateModal')) ?? false);
  const [location, setLocation] = useState(null);
  const [refAbout, setAbout] = useState(null);
  const [refProj, setProj] = useState(null);

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
        style={{...controlStyle, position: showModal?'fixed':'', overflowY: showModal ?'scroll':'auto', top: showModal?`-${location}px`:`` }}
    >
        <Header onOpen={setShowModal} setScroll={setLocation} loc={{ refAbout, refProj }}/>
      <main>
          <Hero about={setAbout} />
          <Project proj={setProj} />
          <Write onClose={funcToglle} toggle={showModal} setScroll={setLocation} />
        </main>
        <Footer/>
        {showModal && <ContactMe onClose={funcToglle} toggle={showModal} />}
        {< BtnUandD /> }
      </div>
      
      </>
  );
};
