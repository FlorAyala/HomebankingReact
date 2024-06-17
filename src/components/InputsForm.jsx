import React, { forwardRef } from 'react';

const InputsForm = forwardRef((props, ref) => {
  return (
    <div> <fieldset>{props.title}</fieldset>
      <input
        ref={ref}
        onChange={props.onChange}
        className="w-full p-2 bg-blue-900 rounded-md border border-gray-700 focus:border-blue-700 hover:border-blue-500 transition-all duration-200"
        placeholder={props.placeholder} type={props.type} name={props.name} id={props.id}
      /></div>
  )
})

export default InputsForm