import { useState, useLayoutEffect } from "react";

const  query = [

    '(max-width: 480px)',
    '(min-width: 481px) and (max-width: 767.5px)',  
    '(min-width: 768px) and (max-width: 1279.5px)',
    '(min-width: 1279.5px)',
    '(max-width: 912px)',
];


export const useMedia = () => {

    const mediaLists = query.map(q => window.matchMedia(q));
    const getVal = ()=> mediaLists.map(mdl => mdl.matches);

    const [val, setVal] = useState(getVal);

    useLayoutEffect(() => {
       
        const funcActuallVall = () => setVal(getVal);
        
        mediaLists.forEach(mdl => mdl.addEventListener('change', funcActuallVall));
        return  () => mediaLists.forEach(mdl => mdl.removeEventListener('change', funcActuallVall));

    });

    return ['isMobile', 'tablet', 'desctop','all','burger'].reduce((acc, screen, index)=>({...acc, [screen]: val[index]}),{});
};