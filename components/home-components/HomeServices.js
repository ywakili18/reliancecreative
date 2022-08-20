import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../Button.js'
const HomeServices = () => {
  return (
    <div className=" bg-emerald-300">
      <section className="md:flex gap-32">
        {/* image */}
        <motion.div
          className="w-3/4 sm:w-11/12 sm:ml-10 m-auto shadow-lg"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/services.png"
            alt="Picture of rocket, thoughtful branding, reliance digital creative."
            width={1000}
            height={2000}
            layout="intrinsic"
          />
        </motion.div>
        {/* text */}
        <motion.div
          className="text-lg text-left md:text-xl lg:text-2xl flex flex-col gap-10 text-black  sm:mt-32 p-10  sm:ml-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <p className="text-2xl font-bold sm:text-4xl">
            A digital world can be difficult to maneuver.
          </p>
          <p>We make it easy for you.</p>
          <p>
            Our team specializes in{' '}
            <span className="font-bold">
              full stack web development, responsive ui/ux design, SEO, and
              branding.
            </span>
          </p>
          <p>
            Whether its optimizing your site to be first on any search result,
            needing a redesign, or starting from scratch: we are here to make
            that happen on <span className="font-bold"> any device.</span>
          </p>
          <Link href="/services">
            <a className="">
              <Button text="See our services." />
            </a>
          </Link>
        </motion.div>
      </section>
    </div>
  )
}

export default HomeServices
