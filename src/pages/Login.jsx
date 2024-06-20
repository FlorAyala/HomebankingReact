import React, { useRef, useState,useEffect } from 'react';
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
  const [loading, setLoading] = useState(true);

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
      let response = await axios.post('https://homebanking-akst.onrender.com/api/auth/login', user);
      let token = response.data;

      const responseCurrent = await axios.get('https://homebanking-akst.onrender.com/api/auth/current', {
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
    setLoading(false);
  };

  function verifyEmail(email) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the time as needed
  }, []); 

  return (
  <main className="container mx-auto flex items-center min-h-screen justify-center lg:min-h-screen">
     {loading ? (
        <div className='flex items-center justify-center w-full h-screen'>
          <div className='p-3 animate-spin drop-shadow-2xl bg-gradient-to-bl from-pink-400 via-purple-400 to-indigo-600 md:w-48 md:h-48 h-32 w-32 aspect-square rounded-full'>
            <div className='rounded-full h-full w-full bg-slate-100 dark:bg-zinc-900 background-blur-md'></div>
          </div>
        </div>
      ) : (
        <>
       
    <div className="w-full md:w-[68vw] lg:w-full flex flex-col md:flex-row items-center justify-center">
      <img src="/public/assets/img/glacier.jpg" className='hidden md:block md:w-[400px]  md:h-[500px] lg:w-[60%] md:ml-[200px] lg:mt-[4.5%] rounded-xl shadow-[3px_5px_42px_0px_#234e52]' alt="" />

      <section className="flex flex-col md:ml-[200px] lg:mt-[4.5%] w-full md:absolute md:w-[50%] lg:w-[400px]">
        <form onSubmit={handleSubmit} className="flex flex-col text-teal-50 gap-1 w-[80%] lg:text p-5 ml-10 bg-[#000000d5] rounded-xl shadow-[3px_5px_42px_0px_#234e52]">

          <h2 className="text-3xl font-bold text-center">LOGIN</h2>
          <h3 className="mb-4 lg:text-center">Welcome back! Please login to your account</h3>


          <InputsForm onChange={(e) => setEmail(e.target.value)} title="User Name" placeholder="Email" type="email" name="email" id="email" />
          {email === '' ? <p className="text-red-500">Email is required</p> : ''}

          <InputsForm onChange={(e) => setPassword(e.target.value)} title="Password" placeholder="Password" type="password" name="password" id="password" />
          {password === '' ? <p className="text-red-500">Password is required</p> : ''}




          <button className="w-full py-2 lg:mt-10 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 rounded-md text-white ring-2" onClick={handleSubmit}>Login</button>
          <p className="text-center mt-4">
            Don't have an account?{' '}
            <ButtonHome href="/register" text="Sign Up" />
          </p>
        </form>
      </section>
    </div>
    </>
  )}
  </main>

  );
};

export default Login;


