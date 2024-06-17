import React from 'react'
import { Carousel } from "flowbite-react";

const Carrusel = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 w-[80%] mx-auto ">
      
      <Carousel>
        <img src="/public/assets/img/fotoCarrusel-1.jpg" alt="..." />
        <img  src="/public/assets/img/fotoCarrusel-2.jpg" alt="..." />
        <img  src="/public/assets/img/fotoCarrusel-3.jpg" alt="..." />
        <img  src="/public/assets/img/fotoCarrusel-4.jpg" alt="..." />
        <img  src="/public/assets/img/fotoCarrusel-5.jpg" alt="..." />
        
      </Carousel>
    </div>
  )
}

export default Carrusel