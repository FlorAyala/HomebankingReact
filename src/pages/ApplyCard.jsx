import React from 'react'
import FormApplyCards from '../components/FormApplyCards'

const ApplyCard = () => {
  return (
    <main className=' w-full p-5 flex flex-col justify-evenly h-screen items-center'>

    <h2 className='text-[#d0ad50] text-5xl '>Apply for a card</h2>
    <section className='flex flex-row w-full items-center justify-evenly'>
        <div className='text-white flex flex-col shadow-2xl shadow-blue-500/20 p-8 w-2/6 h-5/6'>
            <FormApplyCards text="Select card type"/>
                      
            <div className='flex flex-row justify-around pt-5'>
                <button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Apply</button>
                <button type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Cancel</button>
            </div>
        </div>
        <div>
            <img className="w-4/5 " src="/public/assets/img/img-cards.png" alt="img-logo"></img>
        </div>
    </section>
</main>
  )
}

export default ApplyCard


 {/* <legend className='text-xl pb-2'>Select card type</legend>
<select id="underline_select" className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-700  dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
<option selected>Choose a card</option>
<option className='text-black' >Debit</option>
<option className='text-black' >Credit</option>
</select>

<legend className='text-xl pt-5'>Select card membership (color)</legend>
<select id="underline_select" className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200  dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
<option selected>Choose a card</option>
<option className='text-black' value="gold">Gold</option>
<option className='text-black' value="titanium">Titanium</option>
<option className='text-black' value="black">Black</option>
</select> */}