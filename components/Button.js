import React from 'react'

const Button = ({ text }) => {
  return (
    <button className="px-4 py-1  space relative  group overflow-hidden font-light bg-black text-white inline-block border border-white">
      <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-white group-hover:h-full opacity-90"></span>
      <span className="relative group-hover:text-black sm:text-lg text-sm">
        {text}
      </span>
    </button>
  )
}

export default Button
