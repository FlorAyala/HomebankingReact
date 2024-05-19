import React from 'react'

const Transaction = () => {
  return (
    <main className='w-full p-5 flex flex-col justify-evenly h-screen items-center'>
    <h2 className='text-[#d0ad50] text-5xl '>Make a transaction</h2>
    <div className='flex flex-row justify-between'>
      <form className='text-white flex flex-col shadow-2xl shadow-blue-500/20 p-8 w-2/6 h-96'>
        <fieldset>
          <label className="text-white"> Destination type:
            <div className="flex flex-row space-x-4 p-5">
              <label className="relative flex items-center cursor-pointer">
                <input className="sr-only peer" name="futuristic-radio" type="radio" />
                <div
                  className="w-6 h-6 bg-transparent border-2 border-green-500 rounded-full peer-checked:bg-green-500 peer-checked:border-green-500 peer-hover:shadow-lg peer-hover:shadow-green-500/50 peer-checked:shadow-lg peer-checked:shadow-green-500/50 transition duration-300 ease-in-out"
                ></div>
                <span className="ml-2 text-white">Own</span>
              </label>
              <label className="relative flex items-center cursor-pointer">
                <input className="sr-only peer" name="futuristic-radio" type="radio" />
                <div
                  className="w-6 h-6 bg-transparent border-2 border-green-500 rounded-full peer-checked:bg-green-500 peer-checked:border-green-500 peer-hover:shadow-lg peer-hover:shadow-green-500/50 peer-checked:shadow-lg peer-checked:shadow-green-500/50 transition duration-300 ease-in-out"
                ></div>
                <span className="ml-2 text-white">Others</span>
              </label>

            </div>
          </label>
          <section className='flex flex-col gap-5'>

            <div className='flex flex-col'>
              <label htmlFor="" >
                Source account
                <select name="" id="">
                  <option value="">cuenta 1</option>
                  <option value="">cuenta 2</option>
                </select>
              </label>

            </div>
            <label htmlFor="">Amount:
              <input type="number" name="" id="" />

            </label>

            <label htmlFor="">Description:
              <input type="text" name="" id="" />
            </label>

          </section>

        </fieldset>
        
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Cyan to blue
          </span>
        </button>
      </form>
      <img className="w-2/5 " src="/public/assets/img/transacciones.png" alt="img-logo"></img>
    </div>
  </main>
  )
}

export default Transaction