import React from 'react'
import Card from '../components/Card'
import { Link } from "react-router-dom";

const LoansMain = () => {
  return (
    <main className=' w-full p-5 flex flex-col justify-evenly h-screen items-center'>
      <h2 className='text-[#d0ad50] text-5xl '>Your Loans</h2>
      <div className='flex flex-row gap-3 flex-wrap justify-center w-full'>
        <Card textoNumber="Automotive" textoAmount="Amount: $200.000" textoDate="Aplication date: 25/5/24" />
        <Card textoNumber="Personal" textoAmount="Amount: $100.000" textoDate="Aplication date: 25/5/24" />
      </div>
      <div className='ml-[350px]'>
        <Link to='applyloan'>
          <button type="button" className="flex  text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Apply card</button>
        </Link>

      </div>
    </main>
  )
}

export default LoansMain