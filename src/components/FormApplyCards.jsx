import React from 'react'
import OptionCards from './OptionCards'

function FormApplyCards(props) {
  return (
    <form className="max-w-sm mx-auto w-full">
    <legend className='text-xl pb-2'>{props.text}</legend>
    <select id="underline_select" className="block py-2.5 px-0 w-full text-sm text-gray-500  bg-transparent border-0 border-b-2 border-gray-700  dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
      <option selected>Choose a card</option>
     <OptionCards textOptions="Credit"/>
     <OptionCards textOptions="Debit"/>
    </select>

    <legend className='text-xl pb-2 mt-10'>Select card membership (color)</legend>
    <select id="underline_select" className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200  dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
      <option selected>Choose a card</option>
      <OptionCards textOptions="Gold"/>
      <OptionCards textOptions="Titanium"/>
      <OptionCards textOptions="Black"/>
    </select>
  </form>
  )
}

export default FormApplyCards

