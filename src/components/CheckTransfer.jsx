import React from 'react'

const CheckTransfer = (props) => {
  return (
    <label className="relative flex items-center cursor-pointer">

    <input className="sr-only peer" name="futuristic-radio" type="radio" />
    <div
      className="w-6 h-6 bg-transparent border-2 border-green-500 rounded-full peer-checked:bg-green-500 peer-checked:border-green-500 peer-hover:shadow-lg peer-hover:shadow-green-500/50 peer-checked:shadow-lg peer-checked:shadow-green-500/50 transition duration-300 ease-in-out"
    ></div>
    <span className="ml-2 text-white">{props.text}</span>
  </label>
  )
}

export default CheckTransfer