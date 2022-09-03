import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AiOutlineInstagram } from 'react-icons/ai'
const Footer = () => {
  return (
    <footer className="p-4  shadow-xl bg-black text-white text-center md:flex md:items-center md:justify-between md:p-6 space ">
      <span className="text-sm  sm:text-center">
        © 2022{' '}
        <Link href="/">
          <a className="hover:underline">Reliance Digital Creative™. </a>
        </Link>
        All Rights Reserved.
      </span>
      <ul className="flex gap-10 justify-center ">
        <Link href="/about">
          <a className="hover:text-green-500 transition-all">About</a>
        </Link>
        <Link href="/services">
          <a className="hover:text-green-500 transition-all">Services</a>
        </Link>
        <Link href="/contact">
          <a className="hover:text-green-500 transition-all">Contact</a>
        </Link>
        <a
          href="https://instagram.com/reliancecreative"
          className="flex gap-2  hover:text-emerald-600 transition-all"
        >
          <AiOutlineInstagram className="text-2xl " />
        </a>
      </ul>
    </footer>
  )
}

export default Footer
