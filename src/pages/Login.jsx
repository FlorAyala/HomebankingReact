import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import InputsForm from '../components/InputsForm';
import ButtonHome from '../components/ButtonHome';
import { login } from '../redux/actions/authActions';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const inputEmail = useRef(null);
  const inputPassword = useRef(null);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = {
      email: email,
      password: password,
    };

    try {
      let response = await axios.post('http://localhost:8080/api/auth/login', user);
      let token = response.data;

      const responseCurrent = await axios.get('http://localhost:8080/api/auth/current', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      let client = responseCurrent.data;
      client.token = token;

      dispatch(login(client));
      navigate('/account');

    } catch (error) {
      console.log(error);
    }
  };

  function verifyEmail(email) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }

  return (
  <main className="h-screen">
    <div className="flex flex-1 flex-col items-center justify-center  h-full min-h-screen min-w-full ">
     
      <img src="/public/assets/img/glacier.jpg" className='hidden md:block md:w-[400px]  md:h-[554px] lg:ml-[400px] lg:w-[70%] md:ml-[200px] lg:mt-[4.5%] rounded-xl shadow-[3px_5px_42px_0px_#234e52]' alt="" />
  
      
      <section className="flex flex-col md:ml-[200px] mt-10 lg:mb-[4.5%] w-full md:absolute md:w-[50%] lg:w-[600px]  lg:h-[400px]  h-full">
        <form className="flex flex-col text-teal-50 gap-1 w-[70%] md:h-[554px]  md:ml-20 md:mt-10 lg:text p-5 ml-10 bg-[#000000d5] rounded-xl shadow-[3px_5px_42px_0px_#234e52]  h-full">
          <h2 className="text-3xl font-bold text-center">LOGIN</h2>
          <h3 className="mb-4 lg:text-center">Welcome back! Please login to your account</h3>
  
          
          <InputsForm onChange={(e) => setEmail(e.target.value)} title="User Name" placeholder="Email" type="email" name="email" id="email" />
          {email === '' ? <p className="text-red-500">Email is required</p> : ''}
  
          <InputsForm onChange={(e) => setPassword(e.target.value)} title="Password" placeholder="Password" type="password" name="password" id="password" />
          {password === '' ? <p className="text-red-500">Password is required</p> : ''}
  
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <label className="text-white">
                <input className="w-4 h-4 dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100" type="checkbox" />
              </label>
              <span className="text-white ml-2">Remember me</span>
            </div>
            <a className="text-blue-500 font-medium hover:underline" href="#">
              Forgot Password
            </a>
          </div>
  
         
          <button className="w-full py-2 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 rounded-md text-white ring-2" onClick={handleSubmit}>Login</button>
          <p className="text-center mt-4">
            Don't have an account?{' '}
            <ButtonHome href="/register" text="Sign Up" />
          </p>
        </form>
      </section>
    </div>
  </main>
  
  );
};

export default Login;

