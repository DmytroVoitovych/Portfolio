import { useForm } from 'react-hook-form';
import { createPortal } from "react-dom";
import { over, form, inputBox, logo, submit, subDisabled, mobForm, menu, dow } from './ContactMe.styled';
import { css } from '@emotion/react';
import { useTimeout } from 'helpers/customHook/useTimeout';
import { funcClickBackdrop } from './funcClickBackdrop';
import { onError } from './onError';
import { joberValid, nameValid, messageValid } from './validation';
import { memo } from 'react';
import { funcSubmit } from './funcSubmit';
import { AiFillCloseCircle } from 'react-icons/ai';
import { funcClickSuccess } from './funcClickSuccess';
const modal = document.querySelector('#modal');

export const ContactMe = memo(({ onClose, toggle, media}) => {
    const state = window.localStorage.getItem('stateModal');
   
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [opacity, top, setChange,] = useTimeout(toggle, 1.5, onClose);
    const { tablet, isMobile } = media;;
       
    return createPortal(
        <div css={css`${over}  top: ${state?0:top}vh; opacity: ${state?1:opacity};`} onClick={(e) => funcClickBackdrop(e, setChange, onClose)} >
            <form action="" css={[form, isMobile && mobForm]} onSubmit={handleSubmit((data)=>funcSubmit(data,onClose,setChange,reset), onError)}>
                <div css={logo}>
                    <span>FeedBack</span>
                </div>
                <div css={inputBox} style={{gridTemplateColumns: tablet && 'minmax(280px,378px)'}}>
                    <input {...register('name', nameValid)}
                        placeholder={errors?.name ? errors.name.message : 'Your name:'}
                        style={errors?.name && { color: '#FF0000', fontWeight: 'bolder', outline: '1px solid #FF0000' }}
                    />
                    <input {...register('jober', joberValid)}
                        placeholder={errors?.jober ? errors.jober.message : 'Name of your organisation:'}
                        style={errors?.jober && { color: '#FF0000', fontWeight: 'bolder', outline: '1px solid #FF0000' }}
                    />
                    <textarea   {...register('message', messageValid)} cols="30" rows="10" placeholder='Your message to me:' ></textarea>
                </div>
                <button
                    css={errors?.name || errors?.jober || errors?.message ? subDisabled : submit}
                    type='submit'
                    disabled={errors?.name || errors?.jober || errors?.message ? true : false}
                >
                    Submit
                </button>

               
            
            </form>
            
            {isMobile && toggle && <AiFillCloseCircle size='30px'  css={[menu,dow]} onClick={()=>funcClickSuccess(onClose,setChange)}  />}
        </div>, modal);

});