import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import Carrusel from '../components/Carrusel'
import axios from 'axios';


const Account = () => {

  let [accounts, setAccounts] = useState([]);
  useEffect(() => {
    getData();
    console.log(accounts);
  }, [])
  const getData = async()=> {
    try {
      let response = await axios.get('http://localhost:8080/api/clients/1')
      setAccounts(response.data)
      console.log(response);

    } catch (error) {
      console.log(error);
    }

  }


  return (
    <main className=' w-full p-5 flex flex-col justify-evenly h-screen gap-5' >
       
      <div className='flex justify-between'>
        <h2 className='text-white text-4xl '>Welcome {accounts.nombre} {accounts.apellido}!</h2>
        <button className="relative inline-flex items-cent1er justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-[#f5e3b3] to-[#af954c] group-hover:from-[#4d9120] group-hover:to-[#e6c05a] dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-[#C7AE6A] dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Add Account
          </span>
        </button>
      </div>
      {/* CARDS */}
      <div className='flex flex-row gap-5 flex-wrap justify-center '>
        <Card  key={accounts.id} textoNumber={'Number account: '+ accounts.number} textoAmount="Amount: $250.000" textoDate="Creation date: 25/5/24" />
        <Card textoNumber="Number account: VN-000002" textoAmount="Amount: $200.000" textoDate="Creation date: 25/5/24" />
      </div>
      <Carrusel />
    </main>
  )
}

export default Account