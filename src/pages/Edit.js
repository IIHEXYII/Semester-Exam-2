import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useAxios from '../utils/useAxios';
import Item from '../components/Item';
import {PRODUCTS_PATH} from '../utils/constants';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import{ productSchema } from '../utils/validation/Schemas';


const EditProduct = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
    const [product, setProduct] = useState(null);
    const {id} = useParams();
    const http = useAxios();

    const [submitting, setSubmitting] = useState(false);
    const [updateError, setUpdateError] = useState(null);
    const [success, setSuccess] = useState(null);

    const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(productSchema)
  });

  const onSubmit = async data => {
    setSubmitting(true);
    setUpdateError(null);
    console.log(data);
    
    try {
        const response = await http.put(`${PRODUCTS_PATH}/${id}`, data);
        console.log('response', response.data);
        setProduct(response.data);
        setSuccess(true);
      } catch (error) {
          console.log('error', error);
          setUpdateError(error.toString());
      } finally {
          setSubmitting(false);
      }
    };
    
    useEffect(() => {
        const getProduct = async () => {
          try {
            const response = await http.get(`${PRODUCTS_PATH}/${id}`);
            console.log(response);
            setProduct(response.data);
          } catch (error) {
            console.log(error);
          }
        };

        getProduct();
      }, [id]);

      if (!product) {
        return <p>Loading...</p>;
      }
  return (
    <>
    <div className="pageContent">
    <div className="card">
      <h1 className="card__title">Edit Product</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {updateError && <p>{updateError}</p>}
        <fieldset className="card__field" disabled={submitting}>
            <div>
            <input className="card__input"
                name='title'
                placeholder='Title'
                ref={register}
                defaultValue={product.title}
            />
            {errors.title && <p>{errors.identifier.message}</p>}
            </div>

            <div>
            <input className="card__input"
                name='price'
                placeholder='Price'
                defaultValue={product.price}
                ref={register}
                type='number'
            />
            {errors.price && <p>{errors.price.message}</p>}
            </div>
            <div>
            <textarea className="card__input"
                name='description'
                placeholder='Description'
                defaultValue={product.description}
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
                defaultValue={product.image_url}
                type='text'
            />
            {errors.image_url && <p>{errors.image_url.message}</p>}
            </div>

            <button type='submit'>{submitting ? 'Updating ...' : 'Update'}</button>
        </fieldset>
        </form>
      

        {success ? <p>Listing of {product.title} was updated</p> : null}
      <Item {...product} />
      </div>
    </div>
    </>
  );
};

export default EditProduct;