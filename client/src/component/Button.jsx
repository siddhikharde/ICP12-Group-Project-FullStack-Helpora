import React from 'react'
const sizeStyle={
    "sm": "px-3 py-1.5 text-sm",
    "md": "px-5 py-2",
    "lg": "px-6 py-2.5 text-lg"
}
const colorStyle={
    "primary": "bg-blue-500 text-white hover:bg-blue-600",
    "secondary": "bg-gray-500 text-white hover:bg-gray-600",
} 
function Button({title, size="md", color="primary", onClick}) {
  return (
    <button className={`${sizeStyle[size]} ${colorStyle[color]} rounded-md cursor-pointer transition duration-200`} onClick={onClick}>
      {title}
    </button>
  )
}

export default Button
