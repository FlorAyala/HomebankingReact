import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
    return (

        <div className='flex flex-col px-2 items-center'>
            <section className='text-white h-[12em] w-[18em] border-2 border-[rgba(55,70,156,0.5)] rounded-[1.5em] bg-gradient-to-br from-[#202b8d] to-[rgba(39,175,175,0.01)]  font-nunito p-[1em] flex justify-center items-left flex-col gap-[0.75em] backdrop-blur-[12px]'>
                <p>{props.textoNumber}</p>
                <p>{props.textoAmount}</p>
                <p>{props.textoDate}</p>
            </section>
            {props.showButton && (
        <Link to={`/account2/${props.id}`}>
          <button className="mt-5 px-5 py-2.5 transition-all ease-in duration-75 bg-[#C7AE6A] dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">Details</button>
        </Link>
      )}

        </div>



    )
}
export default Card
