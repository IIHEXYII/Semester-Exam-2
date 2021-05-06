import useAxios from '../utils/useAxios';
import { useState } from 'react';
import { ENQUIRIES_PATH } from '../utils/constants';
import { useForm, Controller } from 'react-hook-form';
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
        const [startDate, setStartDate] = useState(new Date);
        const [endDate, setEndDate] = useState(new Date);

        const { register, handleSubmit, errors, control } = useForm({
            resolver: yupResolver(enquirySchema)
        });

        const onSubmit = async data => {
            setSubmitting(true);
            setPostError(null);
            
            console.log(data);

            try {
                const response = await http.post(`${ENQUIRIES_PATH}`, data);
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
                                <Controller 
                                    control={control} 
                                    selected={startDate}
                                    name="startDate"
                                    value={startDate} 
                                    render={() => (
                                        <DatePicker
                                            id='from'
                                            name="startDate"
                                            className="enquiry__input"
                                            selected={startDate}
                                            onChange={date => setStartDate(date)}
                                            minDate={(new Date())}
                                            selectsStart
                                            startDate={startDate}
                                            endDate={endDate}
                                            dateFormat='dd/MM/yyyy'
                                            value={startDate}
                                        /> 
                                    )}
                                    onChange={([selected]) => {
                                        return {value: selected}
                                    }}
                                    defaultValue={{}}
                                /> 
                                </div>
                        <div className="enquiry__div">
                            <label className="enquiry__label" 
                                htmlFor="to" >To</label> 
                                <Controller 
                                    control={control} 
                                    selected={endDate}
                                    name="endDate"
                                    value={endDate}
                                    render={() => (
                                        <DatePicker
                                            id="to"
                                            name="endDate"
                                            className="enquiry__input"
                                            selected={endDate}
                                            onChange={date => setEndDate(date)}
                                            selectsEnd
                                            startDate={startDate}
                                            endDate={endDate}
                                            minDate={startDate}
                                            dateFormat='dd/MM/yyyy'
                                            value={endDate}
                                        /> 
                                    )}
                                    onChange={([selected]) => {
                                        return {value: selected}
                                    }}
                                    defaultValue={{}}
                                />
                        </div>
                    </div>
                  
                        <div className="enquiry__div">
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
                        </div>
            
                    <button className="btn__submit" type='submit'>{submitting ? 'Booking ...' : 'Book'}</button>
                    {success ? <p>Booking was Successful</p> : null}
                </fieldset>
            </form>

              
        </div>
          
        </>
    );
};

export default AddEnquiry;