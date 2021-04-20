import useAxios from '../utils/useAxios';
import { useState } from 'react';
import { PRODUCTS_PATH } from '../utils/constants';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { productSchema } from '../utils/validation/Schemas';

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
            <h1 className="header">Add Product</h1>
             <div className="card">
                <form onSubmit={handleSubmit(onSubmit)}>
                {postError && <p>{postError}</p>}
                <fieldset className="card__field" disabled={submitting}>
                    <div>
                        <input className="card__input"
                            name='title'
                            placeholder='Title'
                            ref={register}
                        />
                        {errors.title && <p>{errors.title.message}</p>}
                    </div>

                    <div>
                        <input className="card__input"
                            name='price'
                            placeholder='Price'
                            ref={register}
                            type='number'
                        />
                        {errors.price && <p>{errors.price.message}</p>}
                    </div>
                    <div>
                        <input className="card__input"
                            name='capacity'
                            placeholder='Capacity'
                            ref={register}
                            type='number'
                        />
                        {errors.price && <p>{errors.price.message}</p>}
                    </div>
                    <div>
                        <textarea className="card__input"
                            name='description'
                            placeholder='Description'
                            ref={register}
                            type='text'
                        />
                        {errors.description && <p>{errors.description.message}</p>}
                    </div>
                    <div>
                        <input className="card__input"
                            name='image_url'
                            placeholder='Image URL'
                            ref={register}
                            type='text'
                        />
                        {errors.image_url && <p>{errors.image_url.message}</p>}
                    </div>
                    <button type='submit'>{submitting ? 'Adding ...' : 'Add'}</button>
                </fieldset>
            </form>
        </div>
            {success ? <p>Listing of PRODUCT was added</p> : null}
            </div>
        </>
    );
};

export default AddProduct;