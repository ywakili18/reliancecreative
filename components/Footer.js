import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
    <footer className="p-4 bg-white shadow md:px-6 md:py-20 ">
      <div className="sm:flex sm:items-center sm:justify-between">
        <a
          href="https://flowbite.com/"
          className="flex items-center mb-4 sm:mb-0"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap :text-white">
            Flowbite
          </span>
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 :text-gray-400">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto :border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center :text-gray-400">
        © 2022
        <Link href="/">
          <a className="hover:underline">Reliance Digital Creative™</a>
        </Link>
        <p>All Rights Reserved.</p>
      </span>
    </footer>
  )
}

export default Footer
