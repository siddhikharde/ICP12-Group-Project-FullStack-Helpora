import React from 'react'

function Input({placeholder, type="text", value, disabled = false, onChange}) {
  return (
    <div>
     <input 
      type={type}
      placeholder={placeholder}
      value={value}
      disabled={disabled}
      onChange={onChange}
      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    </div>
  )
}

export default Input
