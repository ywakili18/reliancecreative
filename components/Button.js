import React from 'react'

const Button = ({ text }) => {
  return (
    <button className="p-2 relative rounded group overflow-hidden font-medium bg-green-50 text-black inline-block border border-black">
      <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-emerald-500 group-hover:h-full opacity-90"></span>
      <span className="relative group-hover:text-white text-xl">{text}</span>
    </button>
  )
}

export default Button
