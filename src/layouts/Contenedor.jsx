import React from 'react'
import Header from '../components/Header'


const Contenedor = ({ children}) => {
  return (
    <div className='flex bg-gradient-to-br h-screen w-full from-[#181717] to-[#413b2d]'>

      <Header />

      {children}    

    </div>
  )
}

export default Contenedor