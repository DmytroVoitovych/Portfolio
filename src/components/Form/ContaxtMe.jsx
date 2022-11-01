import { useForm } from 'react-hook-form';
import { createPortal } from "react-dom";
import { over, form, inputBox, logo, submit } from './ContactMe.styled';
import { css } from '@emotion/react';
import { useTimeout } from 'helpers/customHook/useTimeout';
import { funcClickBackdrop } from './funcClickBackdrop';
import { Notify } from 'notiflix';

const modal = document.querySelector('#modal');
const state = window.localStorage.getItem('stateModal');

export const ContactMe = ({ onClose, toggle }) => {
    
    const { register, formState: { errors }, handleSubmit, reset} = useForm();
    const [opacity, top, setChange,] = useTimeout(toggle, 1.5, onClose);
    
    

    const funcSubmit = (data) => { console.log(data); reset(); };
    const onError = (errors, e) => {
       
        if (errors.name) {
            
             Notify.failure(errors.name.message);
                
        }

        if (errors.jober) {
           
             Notify.failure(errors.jober.message);

        }
               
           

    }; 
    console.log(errors);
    
    return createPortal(
        <div css={css`${over} top: ${state ? 0 : top}vh; opacity: ${state ? 1 : opacity};`} onClick={(e) => funcClickBackdrop(e, setChange, onClose)} >
            <form action="" css={form} onSubmit={handleSubmit(funcSubmit,onError)}>
                <div css={logo}>
                    <span>FeedBack</span>
                </div>
                <div css={inputBox}>
                    <input {...register('name', {
                        required: 'Write your name:',
                        minLength: {
                            value: 4,
                            message: 'Minimum of 4 characters.'
                        },
                        maxLength: {
                            value: 40,
                            message: 'Maximum of 40 characters.'
                        }
                    })}
                        placeholder={errors?.name ? errors.name.message : 'Your name:'}
                        style={errors?.name && { color: '#FF0000', fontWeight: 'bolder', outline: '1px solid #FF0000' }}
                    />
                               

                    <input {...register('jober', {
                        required: 'Write the name of your organization:',
                        minLength: {
                            value: 4,
                            message: 'Minimum of 4 characters.'
                        },
                        maxLength: {
                            value: 40,
                            message: 'Maximum of 40 characters.'
                        }
                    })}
                        placeholder={errors?.jober ? errors.jober.message : 'Name of your organisation:'}
                        style={errors?.jober && { color: '#FF0000', fontWeight: 'bolder', outline: '1px solid #FF0000' }}
                    />
                    <textarea   {...register('message')} cols="30" rows="10" placeholder='Your message to me:' ></textarea>
                </div>
                <button css={submit} type='submit'>Submit</button>

               
            
            </form>
            
            
        </div>, modal);

};