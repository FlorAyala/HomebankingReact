import React from 'react'
import Header from '../components/Header'


const Contenedor = ({ children}) => {
  
  return (
    <div className='flex bg-gradient-to-br h-min-screen w-full  from-[#333131] to-[#685c3f]'>

      <Header />

      {children}    

      
    </div>
  )
}

export default Contenedor