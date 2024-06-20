import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

import InputsForm from '../components/InputsForm';
import ButtonsForms from '../components/ButtonsForms';
import ButtonHome from '../components/ButtonHome';
import Swal from 'sweetalert2'

const Register = () => {

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(true);


  const handleSubmit = async (event) => {
    event.preventDefault();

    const user = {
      firstName: document.getElementById("firstname").value,
      lastName: document.getElementById("lastname").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    };

    try {
      let response = await axios.post('https://homebanking-akst.onrender.com/api/auth/signup', user);

      //console.log(response.data);

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Registration successfully!",
        showConfirmButton: false,
        timer: 1500
      });

    } catch (error) {
      console.log(error);
       handleError(error)
    }
    setLoading(false);
  };
  const handleError = (error) => {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `Error: ${error.response.data}. Status: ${error.response.status}`,
        });
      }
    } else {
      // Algo pasó fuera de Axios
      alert(`Error: ${error}`);
    }
  };

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
            <h2 className='text-3xl font-bold text-center'>Sign Up</h2>

            <InputsForm id='firstname' title='First Name' placeholder='First Name' type='text' name='firstname' value={firstname} />
            <InputsForm id='lastname' title='Last Name' placeholder='Last Name' type='text' name='lastname' value={lastname} />
            <InputsForm id='email' title='Email' placeholder='Email' type='email' name='email' value={email} />
            <InputsForm id='password' title='Password' placeholder='Password' type='password' name='password' value={password} />

            <section className='p-4 '>
              <ButtonsForms text="Register" />
              <p className='text-center p-2'>
                <ButtonHome href="/login" text="Sign In" />
              </p>
            </section>
          </form>
        </section>
      </div>
      </>
      )}
    </main>
  );
};

export default Register;

