import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Footer = () => {
  return (
    <footer className="p-4 bg-white shadow md:px-6 md:py-20 ">
      <div className="sm:flex sm:items-center sm:justify-between flex flex-col ">
        <Link href="/">
          <a className="text-lg">Reliance Digital Creative</a>
        </Link>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 :text-gray-400">
          <li>
            <Link href="/about">
              <a className="mr-4 hover:underline md:mr-6 ">About</a>
            </Link>
          </li>
          <li>
            <Link href="/services">
              <a className="mr-4 hover:underline md:mr-6 ">Services</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a className="mr-4 hover:underline md:mr-6 ">Contact</a>
            </Link>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto :border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center :text-gray-400">
        © 2022
        <Link href="/">
          <a className="hover:underline"> Reliance Digital Creative™</a>
        </Link>
        <p>All Rights Reserved.</p>
      </span>
    </footer>
  )
}

export default Footer
