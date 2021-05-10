import useAxios from '../utils/useAxios';
import { useState } from 'react';
import { PRODUCTS_PATH } from '../utils/constants';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { productSchema } from '../utils/validation/Schemas';
import Hero from '../components/Hero';


const AddProduct = () => {
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
        <div className="pageContent">
        <Hero hero="AddHero">
            <div className="addContainer">
            <h1 className="header">Add Product</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                {postError && <p>{postError}</p>}
                <fieldset className="addContainer__field" disabled={submitting}>
                    <div>
                        <label className="addContainer__label" htmlFor="title" >Title</label>
                        <input className="addContainer__input"
                            id='title'
                            name='title'
                            placeholder='Title'
                            ref={register}
                        />
                        {errors.title && <p className="alert">{errors.title.message}</p>}
                    </div>
                    <div>
                    <label className="addContainer__label" htmlFor="img" >Image</label>
                        <input className="addContainer__input"
                            id="img"
                            name='image_url'
                            placeholder='Image Url'
                            ref={register}
                            type='text'
                        />
                        {errors.image_url && <p className="alert">{errors.image_url.message}</p>}
                    </div>
                    <div>
                    <label className="addContainer__label" htmlFor="price" >Price</label>
                        <input className="addContainer__input"
                            id='price'
                            name='price'
                            placeholder='Price'
                            ref={register}
                            type='number'
                        />
                        {errors.price && <p className="alert">{errors.price.message}</p>}
                    </div>
                    
                    <div>
                    <label className="addContainer__label" htmlFor="capacity" >Capacity</label>
                        <input className="addContainer__input"
                            id='capacity'
                            name='capacity'
                            placeholder='Capacity'
                            ref={register}
                            type='number'
                        />
                        {errors.capacity && <p className="alert">{errors.capacity.message}</p>}
                    </div>
                    <div>
                    <label className="addContainer__label" htmlFor="desc" >Description</label>
                        <textarea className="addContainer__input"
                            id="desc"
                            name='description'
                            placeholder='Description'
                            ref={register}
                            type='text'
                        />
                        {errors.description && <p className="alert">{errors.description.message}</p>}
                       
                    </div>
                    
                    <button className="btn__submit" type='submit'>{submitting ? 'Adding ...' : 'Add'}</button>
                </fieldset>
            </form>
                {success ? <p>Listing of Hotel was added</p> : null}
            </div>
            </Hero>
        </div>
          
        </>
    );
};

export default AddProduct;