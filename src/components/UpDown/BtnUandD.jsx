import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { up, down } from "./btn.styled.jsx";

const upDown = document.querySelector('#upDown');

export const BtnUandD = () => {

  const [locate, setLocate] = useState(0);

  const funcScroll = () => { setLocate(window.scrollY); };

  useEffect(() => {
    window.addEventListener("scroll", funcScroll);
    return () => window.removeEventListener("scroll", funcScroll);
  }, []);

  //https://learn.javascript.ru/size-and-scroll-window#window-scroll
  let scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );
  
  const upEvent = () => window.scroll({ top: 0, behavior: 'smooth', });
  const downEvent = () => window.scrollBy({ top: scrollHeight, behavior: "smooth" });
   

  return createPortal(
    locate !== 0 && <button css={locate > 600 ? up : down} onClick={locate > 600 ? upEvent : downEvent}>
         
      {<BsFillArrowUpCircleFill />}
               
    </button >, upDown
            
  );
    
};