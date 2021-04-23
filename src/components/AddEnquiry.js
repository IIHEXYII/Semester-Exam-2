import useAxios from '../utils/useAxios';
import { useState } from 'react';
import { PRODUCTS_PATH } from '../utils/constants';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { productSchema } from '../utils/validation/Schemas';
// import Hero from '../components/Hero';
const AddEnquiry = () => {
        const http = useAxios();
        const [submitting, setSubmitting] = useState(false);
        const [postError, setPostError] = useState(null);
        const [success, setSuccess] = useState(null);

        const { register, handleSubmit, errors } = useForm({
            resolver: yupResolver(productSchema)
        });

        const onSubmit = async data => {
            setSubmitting(true);
            setPostError(null);
            
            console.log(data);

            try {
                const response = await http.post(`${PRODUCTS_PATH}`, data);
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
            <div className="enquiry">
            <h1 className="header">Add Product</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                {postError && <p>{postError}</p>}
                <fieldset className="enquiry__field" disabled={submitting}>
                    <div className="enquiry__div">
                        <label className="enquiry__label" htmlFor="firstName" >First Name</label>
                        <input className="enquiry__input"
                            id='firstName'
                            name='firstName'
                            placeholder='John'
                            ref={register}
                        />
                        {errors.title && <p className="alert">{errors.title.message}</p>}
                    </div>
                    <div className="enquiry__div">
                        <label className="enquiry__label" htmlFor="LastName" >Last Name</label>
                        <input className="enquiry__input"
                            id='LastName'
                            name='LastName'
                            placeholder='Doe'
                            ref={register}
                        />
                        {errors.title && <p className="alert">{errors.title.message}</p>}
                    </div>
                    <div className="enquiry__div">
                    <label className="enquiry__label" htmlFor="email" >Email Address</label>
                        <input className="enquiry__input"
                            id="email"
                            name='email'
                            placeholder='example@gmail.com'
                            ref={register}
                            type='text'
                        />
                        {errors.image_url && <p className="alert">{errors.image_url.message}</p>}
                    </div>
                    <div className="enquiry__div">
                    <label className="enquiry__label" htmlFor="Adults" >Adults</label>
                        <input className="enquiry__input"
                            id='Adults'
                            name='Adults'
                            defaultValue='1'
                            ref={register}
                            type='number'
                        />
                        {errors.price && <p className="alert">{errors.price.message}</p>}
                    </div>
                    
                    <div className="enquiry__div">
                    <label className="enquiry__label" htmlFor="Children" >Children</label>
                        <input className="enquiry__input"
                            id='Children'
                            name='Children'
                            defaultValue='0'
                            ref={register}
                            type='number'
                        />
                        {errors.capacity && <p className="alert">{errors.capacity.message}</p>}
                    </div>
                    <div className="enquiry__div">
                    <label className="enquiry__label" htmlFor="Comment" >Comment</label>
                        <textarea className="enquiry__input"
                            id="Comment"
                            name='Comment'
                            placeholder='Anything you wanna add?'
                            ref={register}
                            type='text'
                        />
                        {errors.description && <p className="alert">{errors.description.message}</p>}
                       
                    </div>
                    
                    <button className="btn__submit" type='submit'>{submitting ? 'Adding ...' : 'Add'}</button>
                </fieldset>
            </form>
                {success ? <p>Listing of PRODUCT was added</p> : null}
        </div>
          
        </>
    );
};

export default AddEnquiry;