import axios from 'axios';
import { useState } from 'react';
import { CONTACTS_PATH } from '../utils/constants';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { messageSchema } from '../utils/validation/Schemas';
import { BASE_URL } from '../utils/constants';
const Contact = () => {
        // const http = useAxios();
        const [submitting, setSubmitting] = useState(false);
        const [postError, setPostError] = useState(null);
        const [success, setSuccess] = useState(null);

        const { register, handleSubmit, errors } = useForm({
            resolver: yupResolver(messageSchema)
        });

        const onSubmit = async data => {
            setSubmitting(true);
            setPostError(null);
             
            console.log(data);

            try {
                const response = await axios.post(`${BASE_URL}${CONTACTS_PATH}`, data);
                console.log('response', response.data);
                setSuccess(true);
            } catch (error) {
                console.log('error', error);
                setPostError(error.toString());
            } finally {
                setSubmitting(false);
            }

        };

    return (
        <>
            <div className="contact">
                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                {postError && <p className="alert2">{postError}</p>}
                <fieldset className="contact__field" disabled={submitting}>
                    <div className="contact__div">
                        <label className="contact__label" htmlFor="MessageName" >Full Name</label>
                        <input className="contact__input"
                            id='MessageName'
                            name='name'
                            placeholder='John Doe'
                            ref={register}
                        />
                        {errors.name && <p className="alert2">{errors.name.message}</p>}
                    </div>

                    <div className="contact__div">
                        <label className="contact__label" htmlFor="MessageEmail" >Email</label>
                        <input className="contact__input"
                            id='MessageEmail'
                            name='email'
                            placeholder='example@gmail.com'
                            ref={register}
                        />
                        {errors.email && <p className="alert2">{errors.email.message}</p>}
                    </div>
                   
                    <div className="contact__div">
                    <label className="contact__label" htmlFor="message" >Messages</label>
                        <textarea className="contact__input messageBox"
                            id="message"
                            name='message'
                            placeholder='Get in contact...'
                            ref={register}
                            type='text'
                        />
                        {errors.message && <p className="alert2">{errors.message.message}</p>}
                       
                    </div>
                    
                    <button className="btn__submit" type='submit'>{submitting ? 'Sending...' : 'Send'}</button>
                    {success ? <p>Message Was successfully Sent</p> : null}
                </fieldset>
            </form>
              
            </div>
        </>
    );
};

export default Contact;