import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import FormApplyCards from '../components/FormApplyCards'; // Asegúrate de importar tu componente

function MainComponent() {
  const token = useSelector((store) => store.authReducer.token);
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (token) {
      getData();
    }
  }, [token]);

  const getData = async () => {
    try {
      const response = await axios.get('https://homebanking-akst.onrender.com/api/clients/current/cards', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCards(response.data);
     
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the time as needed
  }, []); 



  return (
    <main className="w-full lg:p-5 lg:pl-[20rem] lg:m-0 lg:h-screen lg:ml-[1rem] md:ml-[15rem] flex flex-col justify-evenly mt-10 gap-7 h-min-screen items-center">
      {loading ? (
        <div className='flex items-center justify-center w-full h-screen'>
          <div className='p-3 animate-spin drop-shadow-2xl bg-gradient-to-bl from-pink-400 via-purple-400 to-indigo-600 md:w-48 md:h-48 h-32 w-32 aspect-square rounded-full'>
            <div className='rounded-full h-full w-full bg-slate-100 dark:bg-zinc-900 background-blur-md'></div>
          </div>
        </div>
      ) : (
        <>
      <h2 className='text-[#d0ad50]  text-5xl '>Apply for a card</h2>
      <section className='flex flex-col lg:flex-row flex-wrap w-full items-center justify-evenly '>
        <div className="flex flex-col text-teal-50 gap-4 lg:w-[350px] p-5 bg-[#000000d5] rounded-xl shadow-[3px_5px_42px_0px_#234e52]">
          <FormApplyCards text="Select card type" />
        </div>
        <div>
          <img className="lg:w-4/5 md:w-[200px]" src="/assets/img/img-cards.png" alt="img-logo" />
        </div>
      </section>
      </>
      )}
    </main>
  );
}

export default MainComponent;
