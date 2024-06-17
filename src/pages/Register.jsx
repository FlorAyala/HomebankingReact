import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

import InputsForm from '../components/InputsForm';
import ButtonsForms from '../components/ButtonsForms';
import ButtonHome from '../components/ButtonHome';

const Register = () => {
    const token = useSelector((store) => store.authReducer.token);
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [alertMessage, setAlertMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const user = {
            firstName: document.getElementById("firstname").value,
            lastName: document.getElementById("lastname").value,
            email: document.getElementById("email").value,
            password: document.getElementById("password").value,
        };

        try {
            let response = await axios.post('http://localhost:8080/api/auth/signup', user );
            let token = response.data
            console.log(response.data);
            const responseCurrent = await axios.get('http://localhost:8080/api/auth/current', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            console.log(responseCurrent.data);
            setAlertMessage('Registration successful');
            setTimeout(() => {
                setAlertMessage('');
            }, 3000);

        } catch (error) {
            console.log(error);
            setAlertMessage('Registration failed');
            setTimeout(() => {
                setAlertMessage('');
            }, 3000);
        }
    };

    return (
        <main className="container mx-auto flex items-center justify-center">
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
        </main>
    );
};

export default Register;

