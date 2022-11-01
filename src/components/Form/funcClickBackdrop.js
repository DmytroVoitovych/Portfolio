

export const funcClickBackdrop = (e, setChange, onClose) => {
    if (e.target === e.currentTarget) {

        window.localStorage.removeItem('stateModal');
        setChange(true);
        
        const id = setTimeout(() => {
               onClose();
               clearTimeout(id);
                }, 450);
                        
        }
        
    };