import { funcClickSuccess } from './funcClickSuccess';
import exit from '../../sound/exit.mp3';
const audio = new Audio(exit);

export const funcClickBackdrop = (e, setChange, onClose) => {
  if (e.target === e.currentTarget) {
    //якщо цільовий елемент равний поточному то це бекдроп
    audio.play(); // не звертати увагу моя фігня
    funcClickSuccess(onClose, setChange); //мусить бути  функція  відповідальна за  закриття модалки
  }
};
