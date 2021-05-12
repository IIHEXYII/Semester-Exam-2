// import useAxios from '../utils/useAxios';
import axios from 'axios';
import { useState } from 'react';
import { ENQUIRIES_PATH } from '../utils/constants';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { enquirySchema } from '../utils/validation/Schemas';
// import Hero from '../components/Hero';
import "react-datepicker/dist/react-datepicker.css";
import { BASE_URL } from '../utils/constants';


const AddEnquiry = ({product}) => {
        // const http = useAxios();
        const [submitting, setSubmitting] = useState(false);
        const [postError, setPostError] = useState(null);
        const [success, setSuccess] = useState(null);
        const minDate = `${new Date().getFullYear()}-${new Date().getMonth()+1 > 10 ? (new Date().getMonth()+1) : "0"+(new Date().getMonth()+1)}-${new Date().getDate() > 10 ? new Date().getDate() : "0"+new Date().getDate()}`
        const [startDate, setStartDate] = useState(minDate);
        const [endDate, setEndDate] = useState(minDate);

        console.log(minDate);
        const { register, handleSubmit, errors, control } = useForm({
            resolver: yupResolver(enquirySchema)
        });

        const onSubmit = async data => {
            setSubmitting(true);
            setPostError(null);
            data = {...data, price: product.price, name: product.title}
            console.log(data);

            try {
                const response = await axios.post(`${BASE_URL}${ENQUIRIES_PATH}`, data);
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
        {console.log(errors)}
        <div className="enquiry">
            <form className="enquiry__form"  onSubmit={handleSubmit(onSubmit)}>
                <label className="enquiry__header" htmlFor="lastName" >Booking Hotel</label>
                    {postError && <p>{postError}</p>}
                        <fieldset className="enquiry__field" disabled={submitting}>
                            <div className="enquiry__container-div ">
                                <div className="enquiry__div">
                                    <label className="enquiry__label" htmlFor="firstName" >First Name</label>
                                    <input className="enquiry__input"
                                        id='firstName'
                                        name='first_name'
                                        placeholder='John'
                                        ref={register}
                                    />
                                    <div className="alert-container">
                                    {errors.first_name && <p className="alert">{errors.first_name.message}</p>}
                                </div>
                            </div>
                            
                    <div className="enquiry__div">
                        <label className="enquiry__label" htmlFor="lastName" >Last Name</label>
                            <input className="enquiry__input"
                                id='lastName'
                                name='last_name'
                                placeholder='Doe'
                                ref={register}
                            />
                            <div className="alert-container">
                                {errors.last_name && <p className="alert">{errors.last_name.message}</p>}
                        </div>
                     </div>
                   </div>

                   <div className="enquiry__container-div ">

                    <div className="enquiry__div">
                    <label className="enquiry__label" htmlFor="email" >Email Address</label>
                        <input className="enquiry__input"
                            id="email"
                            name='email'
                            placeholder='example@gmail.com'
                            ref={register}
                            type='text'
                        />
                        <div className="alert-container">
                        {errors.email && <p className="alert">{errors.email.message}</p>}
                        </div>                       
                        
                    </div>
                    <div className="enquiry__div">
                    <label className="enquiry__label" htmlFor="People" >People</label>
                        <input className="enquiry__input"
                            id='People'
                            name='people'
                            defaultValue='1'
                            ref={register}
                            type='number'
                        />
                    </div>
                   </div>
                
                        <div className="enquiry__container-div">
                            <div className="enquiry__div">
                                <label className="enquiry__label" 
                                htmlFor="from" >From</label>
                                <input type="date"
                                        className="enquiry__input"
                                        id="start"
                                        name="date_from"
                                        checked={startDate}
                                        value={startDate}
                                        onChange={e => setStartDate(e.target.value)}
                                        min={minDate}
                                        ref={register}
                                        >
                                    </input>
                                </div>
                        <div className="enquiry__div">
                            <label className="enquiry__label" 
                                htmlFor="to" >To</label>
                                    <input type="date"
                                        className="enquiry__input"
                                        id="to"
                                        name="date_to"
                                        checked={endDate}
                                        value={endDate}
                                        onChange={e => {setEndDate(e.target.value); console.log(e);}}
                                        min={minDate}
                                        ref={register}
                                        >
                                    </input>
                                </div>
                        </div>


{/* /////////////////////////////////////////////////////////////////////////////////////////////                    */}
                            {/* REMEMBER! HOTEL ID NEEDED IN SUBMIT  */}
{/* ///////////////////////////////////////////////////////////////////////////////////////////// */}

                        {/* <div className="enquiry__div">
                        <label className="enquiry__label" htmlFor="comment" ></label>
                            <textarea className="enquiry__input textarea"
                                id="comment"
                                name='comment'
                                placeholder='Anything you wanna add?'
                                ref={register}
                                type='text'
                            />

                            <div className="alert-container">
                            {errors.comment && <p className="alert">{errors.comment.message}</p>}
                            </div>
                        </div> */}
            
                    <button className="btn__submit" type='submit'>{submitting ? 'Booking ...' : 'Book'}</button>
                    {success ? <p>Booking was Successful</p> : null}
                </fieldset>
            </form>  
        </div>
          
        </>
    );
};

export default AddEnquiry;