import { useEffect, useState } from "react"; //хуки
import { createPortal } from "react-dom"; //портал
import { BsFillArrowUpCircleFill } from "react-icons/bs"; //свг іконка
import { up, down } from "./btn.styled.jsx"; // стилі 

const upDown = document.querySelector('#upDown'); // находим кнопочку

export const BtnUandD = () => { //компонент кнопки вверх і вниз 

  const [locate, setLocate] = useState(0); //стейт 

  const funcScroll = () => { setLocate(window.scrollY); }; //записуєм кількість пікселів на який документ проскролено

  useEffect(() => { // кидаємо слухач який виконується тіки при першому рендер
    window.addEventListener("scroll", funcScroll); //слухач
    return () => window.removeEventListener("scroll", funcScroll);// не забуваємо чичтити після себе
  }, []);

  
  let scrollHeight = Math.max( // взнаємо висоту скролу (можна винести для чистоти коду)
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );
  
  const upEvent = () => window.scroll({ top: 0, behavior: 'smooth', }); // функція яка відповідая за скрол наверх
  const downEvent = () => window.scrollBy({ top: scrollHeight, behavior: "smooth" });// функція яка відповідая за скрол до низу 
   

  return createPortal( //створюєм портал
    locate !== 0 && <button css={locate > 600 ? up : down} onClick={locate > 600 ? upEvent : downEvent}>
         
      {<BsFillArrowUpCircleFill />} 
               
    </button >, upDown
            
  );
    
};