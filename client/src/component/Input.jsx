import React from 'react'

function Input({ placeholder, type = 'text', value, disabled = false, onChange, onKeyDown, className = '' }) {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        onChange={onChange}
        onKeyDown={onKeyDown}
        className={`w-full rounded-2xl border border-slate-200 bg-white/75 px-4 py-3 text-sm text-slate-800 shadow-sm outline-none transition duration-200 placeholder:text-slate-400 focus:border-violet-300 focus:ring-4 focus:ring-violet-100 ${className}`}
      />
    </div>
  )
}

export default Input
