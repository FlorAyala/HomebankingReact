import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import 'react-credit-cards/es/styles-compiled.css';

const CardsCreditDebit = (props) => {
 
  return (
    <div className={`card h-[180px] w-[320px] flex flex-col justify-around px-4 py-4 text-black rounded-3xl gap-2 `}>
      <p className="text-xl font-medium">{props.number}</p>
      {
        props.visibilityImgBack && <div className='bg-[#3a3838] w-full h-8'> </div>
      }
     
      <div className="flex justify-between gap-6">
        <p className="text-md font-medium">{props.name}</p>
        <div className="flex-1 flex flex-col justify-end">
          <p className="self-end text-xs">{props.type}</p>
          <p className="self-end w-[70px] text-xs">{props.date}</p>
        </div>
        <div>
          <p> {props.cvv} </p>
          <p>{props.numbercvv}</p>
        </div>
        <div className="self-center">
          {
            props.visibilityImg &&  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 38 24" height="24" width="38">
            <circle fillOpacity="0.62" fill="#F9CCD1" r="12" cy="12" cx="12"></circle>
            <circle fill="#424242" r="12" cy="12" cx="30" opacity="0.36"></circle>
          </svg>
          }
         
        </div>
      </div>
    </div>
  );
};

export default CardsCreditDebit;
