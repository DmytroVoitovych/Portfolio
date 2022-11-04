import { Block, Report } from 'notiflix';
import { optLoader } from './optionLoader';
import { funcClickSuccess } from './funcClickSuccess';
import { form } from './ContactMe.styled';
import axios from 'axios';
const {REACT_APP_API_URL} = process.env;

export const funcSubmit = async (data,onClose,setChange,reset) => {
        Block.dots(`.css-${form.name}`, 'The form is being submitted...', optLoader );
        try {
           await axios.post(REACT_APP_API_URL,data);
            await reset();
            await Report.success('Success','Thanks for your feedback)))');
            funcClickSuccess(onClose,setChange);
        }
        catch(err){
            console.log(err);
             Report.failure('Error',`${err}`);
        }
        finally {
           Block.remove(`.css-${form.name}`); 
        }
    };