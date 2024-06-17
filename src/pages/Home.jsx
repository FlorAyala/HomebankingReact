import React from 'react';
import { Link } from "react-router-dom";
import ButtonHome from '../components/ButtonHome';
import { useSelector } from 'react-redux';
import Carrusel from '../components/Carrusel';

const Home = () => {
    const { login } = useSelector(state => state.authReducer);

    return (
        <div className="flex flex-col items-center  justify-center h-screen px-4 md:pl-[17rem]  lg:w-full">
            <div className="flex flex-col items-center justify-center w-full  mx-auto">
                <div className="flex flex-col text-white text-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-100 to-blue-500 text-transparent bg-clip-text">
                        Welcome to Glacier Net Bank
                    </h2>
                    <p className="text-md md:text-lg bg-gradient-to-r from-blue-100 to-blue-500 text-transparent bg-clip-text">
                        Experience seamless banking from the comfort of your home.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row justify-center mt-10 gap-4">
                    {!login && <ButtonHome href="/login" text="Sign In" />}
                    <ButtonHome href="/register" text="Sign Up" />
                </div>
            </div>

            <div className=" w-20 h-36 ">
                <img className="mx-auto lg:hidden max-h-[100px] md:w-[100px]  lg:h-[604px] w-full max-w-[242px]" src="/public/assets/img/fondo-home.png" alt="Background" />
            </div>

            <div className='lg:w-full'>
                <Carrusel className=" hidden md:hidden  " />
            </div>

        </div>
    );
}

export default Home;
