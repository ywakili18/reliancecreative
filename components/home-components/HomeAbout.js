import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../Button.js'
const HomeAbout = () => {
  return (
    <motion.div
      className="mt-20 text-white bg-lime-200"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      {/* side text container */}
      <section className="md:flex gap-32">
        <div className="w-3/4 sm:w-11/12 sm:ml-10 m-auto">
          <Image
            src="/elevate.png"
            alt="Picture of rocket, thoughtful branding, reliance digital creative."
            width={1000}
            height={2000}
            layout="intrinsic"
          />
        </div>

        {/* text */}
        <div className="text-lg md:text-xl lg:text-2xl flex flex-col gap-10 text-black  sm:mt-32 p-10 ml-5 sm:ml-0">
          <p className="text-2xl font-bold sm:text-4xl">
            Your brand, is your business.
          </p>
          <p>And we&apos;re here to build it.</p>
          <p>
            Our team specializes in{' '}
            <span className="font-bold">
              full stack web development, ui/ux design, SEO, and branding.
            </span>{' '}
            We create and assist in building stunning websites that drive
            traffic, engagement, leads, and conversion.
          </p>{' '}
          <Link href="tel:5108707804">
            <a className="">
              <Button text="Need a redesign or build a site? Give us a call!" />
            </a>
          </Link>
        </div>
      </section>
    </motion.div>
  )
}

export default HomeAbout
