import React from 'react'
import Cards from '../components/Cards'
import { Link } from "react-router-dom";

const CardsMain = () => {
  return (
    <main className='w-full  flex flex-col justify-evenly items-center'>
      <div className='text-white flex flex-col '>
        <div className='flex flex-row'>
          <h2 className='text-center text-4xl text-[#d0ad50]' >Yours cards</h2>
          <div className='ml-[350px]'>
            <Link to='applycard'>
            <button type="button" className="flex  text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Apply card</button>
            </Link>

          </div>
        </div>
        <section className='flex flex-row pt-5'>
          <Cards text="Credit" src="/public/assets/img/cardBlack-1.png" src1="/public/assets/img/cardGold-1.png" src2="/public/assets/img/cardTitanium-1.png" />
          <Cards text="Debit" src="/public/assets/img/cardBlack-1.png" src1="/public/assets/img/cardGold-1.png" src2="/public/assets/img/cardTitanium-1.png" />
        </section>


      </div>
    </main>
  )
}

export default CardsMain