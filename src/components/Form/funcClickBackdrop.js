import { funcClickSuccess } from "./funcClickSuccess";
import exit from '../../sound/exit.mp3';
const audio = new Audio(exit);

export const funcClickBackdrop =  (e, setChange, onClose) => {
    if (e.target === e.currentTarget) {
        audio.play();
        funcClickSuccess(onClose,setChange);
                        
    }
   
        
    };