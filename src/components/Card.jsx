import React from 'react'

 const Card = (props) => {
    return (
           

            <section className='text-white h-[12em] w-[18em] border-2 border-[rgba(75,30,133,0.5)] rounded-[1.5em] bg-gradient-to-br from-[rgba(75,30,133,1)] to-[rgba(75,30,133,0.01)]  font-nunito p-[1em] flex justify-center items-left flex-col gap-[0.75em] backdrop-blur-[12px]'>
                <p>{props.textoNumber}</p>
                <p>{props.textoAmount}</p>
                <p>{props.textoDate}</p>
            </section>
            
        
    )
}
export default Card
