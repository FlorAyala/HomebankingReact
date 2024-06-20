import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import axios from 'axios';


const LoansMain = () => {
  const [client, setClient] = useState([]);
  const token = useSelector(store => store.authReducer.token)
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const response = await axios.get('https://homebanking-akst.onrender.com/api/auth/current', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setClient(response.data.loans);
     
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    getData();
  }, [token])

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the time as needed
  }, []); 

  
  return (
    <main className=' w-full lg:p-5 lg:pl-[20rem]  lg:m-0 lg:h-screen lg:ml-[1rem] md:ml-[15rem] flex flex-col justify-evenly mt-10 gap-7 h-min-screen items-center"'>
      {loading ? (
        <div className='flex items-center justify-center w-full h-screen'>
          <div className='p-3 animate-spin drop-shadow-2xl bg-gradient-to-bl from-pink-400 via-purple-400 to-indigo-600 md:w-48 md:h-48 h-32 w-32 aspect-square rounded-full'>
            <div className='rounded-full h-full w-full bg-slate-100 dark:bg-zinc-900 background-blur-md'></div>
          </div>
        </div>
      ) : (
        <> 
        
      <h2 className='text-[#d0ad50] text-3xl text-center lg:text-5xl '>Your Loans</h2>
      <div className='flex flex-wrap md:flex-row  gap-2 md:gap-3 justify-center w-full'> 
        {client && client.length > 0 ? (
          client.map((loan, index) => (
            <Card
              key={index}
              textoNumber={`Loan Type: ${loan.name}`}
              textoAmount={`Amount: $${loan.amount}`}
              textoDate={`Application date: ${loan.creationDate}`}
              className="md:w-1/2"
            />
          ))
        ) : (
          <p>No loans found</p>
        )}
      </div>
      <div className='flex justify-center mt-3 lg:ml-[350px] lg:mt-0'>
        <Link to='applyloan'>
          <button type="button" className="block relative px-5 py-2.5 transition-all ease-in duration-75 bg-[#C7AE6A] dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">Apply loans</button>
        </Link>

      </div>
      </>
      )}
    </main>
  )
}
export default LoansMain


