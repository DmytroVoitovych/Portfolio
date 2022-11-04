 

export const funcClickSuccess = (onClose,setChange) => {

    window.localStorage.removeItem('stateModal');
    setChange(true);
                
    const id = setTimeout(() => {
           
        onClose();
            
        clearTimeout(id);
    }, 450);
};