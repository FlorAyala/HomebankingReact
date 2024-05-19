import React from 'react'
import Card from '../components/Card'
import Carrusel from '../components/Carrusel'
import Tabla from '../components/Tabla'

const Account2 = () => {
  return (
    <main className='bg-[#1a1a1a] w-full p-5 flex flex-col justify-evenly h-screen items-center'>
      <Carrusel />
      <section className='flex flex-row  items-center pt-10'>
        <div className='w-full mr-10'>
          <Card textoNumber="Número de Cuenta:   VIN-00001" textoAmount="Amount: $200.000" textoDate="Aplication date: 25/5/24" />
        </div>

        <div className='flex flex-col gap-4'>
          <h3 className='text-[#d0ad50] text-lg '>Transactions Resume:</h3>
          <Tabla tipo='CREDIT' amount ='$25,000.0' data='24/04/23' description='Test credit' />
          <Tabla tipo='DEBIT' amount ='$5,000.0' data='24/04/23' description='Test credit' />
          <Tabla tipo='CREDIT' amount ='$200.0' data='24/04/23' description='Coffe. VIN-0859985'/>
        </div>

      </section>
    </main>
  )
}

export default Account2