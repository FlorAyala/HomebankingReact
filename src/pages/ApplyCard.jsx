import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import FormApplyCards from '../components/FormApplyCards'; // Asegúrate de importar tu componente

function MainComponent() {
  const token = useSelector((store) => store.authReducer.token);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    if (token) {
      getData();
    }
  }, [token]);

  const getData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/clients/current/cards', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCards(response.data);
     
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <main className="w-full lg:p-5 lg:pl-[20rem] lg:m-0 lg:h-screen lg:ml-[1rem] md:ml-[15rem] flex flex-col justify-evenly mt-10 gap-7 h-min-screen items-center">
      <h2 className='text-[#d0ad50]  text-5xl '>Apply for a card</h2>
      <section className='flex flex-col lg:flex-row flex-wrap w-full items-center justify-evenly '>
        <div className="flex flex-col text-teal-50 gap-4 lg:w-[350px] p-5 bg-[#000000d5] rounded-xl shadow-[3px_5px_42px_0px_#234e52]">
          <FormApplyCards text="Select card type" />
        </div>
        <div>
          <img className="lg:w-4/5 md:w-[200px]" src="/public/assets/img/img-cards.png" alt="img-logo" />
        </div>
      </section>
      
    </main>
  );
}

export default MainComponent;
