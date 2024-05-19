import React from 'react'

const ApplyLoans = () => {
  return (
    <main className='w-full p-5 flex flex-col justify-evenly h-screen items-center '>
      <h2 className='text-[#d0ad50] text-5xl '>Apply for a loan</h2>
      <section className='flex flex-row mt-16 items-center w-[57.666667%] bg-gradient-to-br from-[#6b5e39] to-[#d3ad45] rounded-xl '>
                        
            <form action="" className='flex flex-col gap-4 w-[350px] p-5 bg-[#3a35357a] rounded-xl shadow-[3px_5px_42px_0px_#234e52]'  >
              <div className='flex flex-row'>

              <fieldset  >
                <legend className='text-white '>Select loan</legend>
                <select name="" id="" className='"border rounded-lg  text-sm w-full bg-gray-800 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500"'>
                  <option value="">Mortgage</option>
                  <option value="">Personal</option>
                  <option value="">Automotive</option>
                </select>
              </fieldset>
              </div>

              <fieldset>
                <legend className='text-white'> Source account</legend>
                <select name="" id="" className='border rounded-lg  text-sm w-full bg-gray-800 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500'>
                  <option value="">Vin001</option>
                  <option value="">Vin002</option>
                  <option value="">Vin003</option>
                </select>
              </fieldset>
              
              <div className='flex flex-col text-white gap-5 '>
                <label htmlFor="" >Amount:
                  <input className='border rounded-lg px-3 text-sm w-full bg-gray-800 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500' type="number" name="" id="" />
                </label>
                <label htmlFor="">Payment:
                  <input className='border rounded-lg px-3  text-sm w-full bg-gray-800 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500' type="number" name="" id="" />
                </label>
              </div>

              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 w-1/2">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0">
                  Submit
                </span>
              </button>
            </form>

            <div>
              <img className="h-[408px] rounded-xl" src="/public/assets/img/loan2.jpg" alt="img-logo"></img>
            </div>

          </section>
    <section>
      
    </section>
    

    </main>
  )
}

export default ApplyLoans