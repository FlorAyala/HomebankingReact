import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
import CardsCreditDebit from '../components/CardsCreditDebit';
import { useSelector } from 'react-redux';
import { CardCredit } from '../components/CardCredit';
import { CardDebit } from '../components/CardDebit';

const CardsMain = () => {


  const [loading, setLoading] = useState(true);



  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the time as needed
  }, []);

  return (
    <div className="flex flex-col h-full min-h-screen min-w-full items-center justify-center lg:pl-[15rem] md:pl-[15rem]">
      {loading ? (
        <div className='flex items-center justify-center w-full h-screen'>
          <div className='p-3 animate-spin drop-shadow-2xl bg-gradient-to-bl from-pink-400 via-purple-400 to-indigo-600 md:w-48 md:h-48 h-32 w-32 aspect-square rounded-full'>
            <div className='rounded-full h-full w-full bg-slate-100 dark:bg-zinc-900 background-blur-md'></div>
          </div>
        </div>
      ) : (
        <>

          <div className='flex flex-col items-center justify-center lg:mb-5'>
            <div className='p-5'>
              <h2 className={`text-[#d0ad50] text-3xl pt-10  lg:text-5xl  `}>Your Cards</h2>
            </div>
          </div>
          <section className='flex flex-col lg:flex-row items-center justify-center lg:mb-10'>
          <div>
            <h3 className={`text-[#d0ad50] text-center lg:m-5 text-3xl pt-10  lg:text-5xl  `}> Credit</h3>
            <CardCredit />
          </div>
          <div>
            <h3 className={`text-[#d0ad50] text-center lg:m-5 text-3xl pt-10  lg:text-5xl  `}> Debit</h3>
            <CardDebit />
          </div>
          </section>

          <div className='lg:ml-[350px] my-10 items-center justify-center '>
            <Link to='applycard'>
              <button type="button" className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-[#C7AE6A] dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">Apply card</button>
            </Link>

          </div>
        </>
      )}
    </div>



  )
}

export default CardsMain;
