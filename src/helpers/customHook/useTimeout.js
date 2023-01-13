import { useState, useEffect, useCallback } from 'react';
import exit from '../../sound/exit.mp3';
const audio = new Audio(exit);

export const useTimeout = (toggle, time, onClose) => {
  const [change, setChange] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const [top, setTop] = useState(100);

  const funcKeyDown = useCallback(
    e => {
      if (e.code === 'Escape') {
        audio.play();
        window.localStorage.removeItem('stateModal');
        setChange(true);

        const id = setTimeout(() => {
          onClose();
          clearTimeout(id);
        }, 450);
      }
    },
    [onClose]
  );

  useEffect(() => {
    window.addEventListener('keydown', funcKeyDown);
    return () => window.removeEventListener('keydown', funcKeyDown); // анонимка для отмены слежения
  }, [funcKeyDown]);

  useEffect(() => {
    const idStart = setTimeout(() => {
      if (toggle) {
        opacity <= 1 && setOpacity(opacity + 0.01);
        top !== 0 && setTop(top - 1);
      }
    }, time);

    const idEnd = setTimeout(() => {
      if (change) {
        if (opacity >= 0 || top < 100) {
          setOpacity(opacity - 0.01);
          setTop(top + 1);
        }
      }
    }, time);

    return () => {
      clearTimeout(idStart);
      clearTimeout(idEnd);
    };
  });

  return [opacity, top, setChange, change];
};
