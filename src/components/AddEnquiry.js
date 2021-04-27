import useAxios from '../utils/useAxios';
import { useState } from 'react';
import { PRODUCTS_PATH } from '../utils/constants';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { enquirySchema } from '../utils/validation/Schemas';
// import Hero from '../components/Hero';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const AddEnquiry = () => {
        const http = useAxios();
        const [submitting, setSubmitting] = useState(false);
        const [postError, setPostError] = useState(null);
        const [success, setSuccess] = useState(null);

        const { register, handleSubmit, errors } = useForm({
            resolver: yupResolver(enquirySchema)
        });

            const [startDate, setStartDate] = useState(new Date);
            const [endDate, setEndDate] = useState(new Date);

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
            {/* <h1 className="header">Add Product</h1> */}
                <form className="enquiry__form"  onSubmit={handleSubmit(onSubmit)}>
                <h1 className="header">Add Product</h1>
                {postError && <p>{postError}</p>}
                <fieldset className="enquiry__field" disabled={submitting}>
                   <div className="enquiry__container-div ">
                   <div className="enquiry__div">
                        <label className="enquiry__label" htmlFor="firstName" >First Name</label>
                        <input className="enquiry__input"
                            id='firstName'
                            name='firstName'
                            placeholder='John'
                            ref={register}
                        />
                        <div className="alert-container">
                        {errors.first_name && <p className="alert">{errors.first_name.message}</p>}
                        </div>
                    </div>
                    <div className="enquiry__div">
                        <label className="enquiry__label" htmlFor="LastName" >Last Name</label>
                        <input className="enquiry__input"
                            id='LastName'
                            name='LastName'
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
                                    <DatePicker
                                        id='from'
                                        className="enquiry__input"
                                        selected={startDate}
                                        onChange={date => setStartDate(date)}
                                        minDate={(new Date())}
                                        selectsStart
                                        startDate={startDate}
                                        endDate={endDate}
                                        dateFormat='dd/MM/yyyy'
                                    />
                                </div>
                                <div className="alert-container"></div>

                        <div className="enquiry__div">
                            <label className="enquiry__label" 
                                htmlFor="to" >To</label> 
                                    <DatePicker
                                        id="to"
                                        className="enquiry__input"
                                        selected={endDate}
                                        onChange={date => setEndDate(date)}
                                        selectsEnd
                                        startDate={startDate}
                                        endDate={endDate}
                                        minDate={startDate}
                                        dateFormat='dd/MM/yyyy'

                                    />
                        </div>
                    </div>
                    <div className="enquiry__container-div">

                    <div className="enquiry__div">
                    <label className="enquiry__label" htmlFor="Comment" >Comment</label>
                        <textarea className="enquiry__input textarea"
                            id="Comment"
                            name='Comment'
                            placeholder='Anything you wanna add?'
                            ref={register}
                            type='text'
                        />

                        <div className="alert-container">

                        </div>
                       
                    </div>
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