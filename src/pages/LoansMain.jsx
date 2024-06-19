import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import axios from 'axios';


const LoansMain = () => {
  const [client, setClient] = useState([]);
  const token = useSelector(store => store.authReducer.token)

  const getData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/auth/current', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setClient(response.data.loans);
     
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, [token])

  
  return (
    <main className=' w-full lg:p-5 lg:pl-[20rem]  lg:m-0 lg:h-screen lg:ml-[1rem] md:ml-[15rem] flex flex-col justify-evenly mt-10 gap-7 h-min-screen items-center"'>
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
    </main>
  )
}
export default LoansMain
