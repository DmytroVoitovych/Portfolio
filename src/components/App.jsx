import { controlStyle } from "helpers/forApp/baseStyle";
import { useState, useEffect } from "react";
import { Header, Hero, Project, Write, Footer, ContactMe } from "./index";

export const App = () => {
  const [showModal, setShowModal] = useState(()=>JSON.parse(window.localStorage.getItem('stateModal')) ?? false);
  
  const funcToglle = () => { setShowModal(!showModal) };
  
  useEffect(() => {
     
      const id = setTimeout(() => {
      showModal && window.localStorage.setItem('stateModal', JSON.stringify(showModal))
        clearTimeout(id);
      }, 450);
  
  });

  return (
    <>
      <div
        style={{...controlStyle, position: showModal && 'fixed', overflow: showModal && 'scroll' }}
    >
   <Header onOpen={setShowModal} />
      <main>
          <Hero />
          <Project />
          <Write/>
        </main>
        <Footer/>
        { showModal && <ContactMe  onClose={funcToglle} toggle={showModal}/>}
    </div>
      
      </>
  );
};
