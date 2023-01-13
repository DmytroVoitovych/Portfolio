import useResizeObserver from '@react-hook/resize-observer'
import { useState, useLayoutEffect } from 'react';

export const useSize = (target) => {
    const [size, setSize] = useState();

    useLayoutEffect(() => { //Визиваєм useLayoutEffect для заміру  розміру нашого елемента,до того як браузер перемалює його
        setSize(target.current.getBoundingClientRect())
    }, [target]);

    useResizeObserver(target, (entry) => setSize(entry.contentRect));  //записуєм зміни (слідкуєм)
    
    return size;  
};