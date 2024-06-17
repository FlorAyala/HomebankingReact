import React from 'react'

const ButtonsForms = (props) => {
  return (
    <button
    className="w-full justify-center py-1 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 rounded-md text-white ring-2"
    id="login" name="login" type="submit">   
       {props.text}

</button>
  )
}

export default ButtonsForms