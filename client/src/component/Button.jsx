import React from 'react'

const sizeStyle = {
  sm: 'px-4 py-2.5 text-sm',
  md: 'px-5 py-3 text-sm',
  lg: 'px-6 py-3.5 text-base'
}

const colorStyle = {
  primary: 'premium-button',
  secondary: 'premium-button secondary',
  ghost: 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50'
}

function Button({ title, size = 'md', color = 'primary', onClick, className = '' }) {
  return (
    <button
      type='button'
      className={`${sizeStyle[size]} ${colorStyle[color]} ${className} rounded-full cursor-pointer transition-all duration-200`}
      onClick={onClick}
    >
      {title}
    </button>
  )
}

export default Button
