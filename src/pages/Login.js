import { useState, useContext} from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { BASE_URL, AUTH_PATH } from '../utils/constants';
import axios from 'axios';
import AuthContext from '../context/AuthContext';
import {loginSchema} from '../utils/validation/Schemas';
import { useHistory } from "react-router-dom";
import Hero from '../components/Hero';

const Login = () => {
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const history = useHistory();
  
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(loginSchema)
  });
  const [, setAuth] = useContext(AuthContext);

  const onSubmit = async data => {
    setSubmitting(true);
    setLoginError(null);

    console.log(data);

    try {
      const response = await axios.post(`${BASE_URL}${AUTH_PATH}`, data);
      console.log('response', response.data);
      setAuth(response.data);
      history.push("/");
    } catch (error) {
      console.log('error', error);
      setLoginError(error.toString());

    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
    <div className="pageContent">
    <Hero>
    <div className="login">
    <div className="login__title">Login</div>
      <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
        {loginError && <p>{loginError}</p>}
        <fieldset className="login__fieldset" disabled={submitting}>
          <div className="login__inputContent">
            <div className="login__field">
              <input className="login__input" name='identifier' placeholder='Username' ref={register} />
              {errors.identifier && <p className="alert">{errors.identifier.message}</p>}
            </div>

            <div className="login__field">
              <input className="login__input"
                name='password'
                placeholder='Password'
                ref={register}
                type='password'
              />
              {errors.password && <p className="alert">{errors.password.message}</p>}
            </div>
          <button className="btn__submit" type='submit'>{submitting ? 'Loggin in...' : 'Login'}</button>
          </div>
        </fieldset>
      </form>
      </div>
      </Hero>
    </div>
  
    </>
  );
};

export default Login;