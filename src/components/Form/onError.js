

import { Notify } from 'notiflix';

export  const onError = (errors) => {
       
        if (errors.name) {
            
            Notify.failure(errors.name.message);
                
        }

        if (errors.jober) {
           
            Notify.failure(errors.jober.message);

        }
       
        if (errors.message) {
           
            Notify.failure(errors.message.message);

        }
           
        return;
    };