import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../Button.js'
const HomeAbout = () => {
  return (
    <div className="mt-20 text-white bg-emerald-200 sm:p-20">
      <section className="md:flex gap-32">
        {/* image */}
        <motion.div
          className="w-3/4 sm:w-full sm:ml-10 m-auto shadow-lg"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/elevate.png"
            alt="3D shape, depicting waves."
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
          <p className="text-2xl font-bold sm:text-4xl space">
            Your brand, is your business.
          </p>
          <p>And we&apos;re here to build it.</p>{' '}
          <p>
            {' '}
            We create and assist in building stunning websites that drive
            traffic, engagement, leads, and conversion.
          </p>
          <p>
            Your brand identity is important to us at Reliance Digital Creative.
            We position your core values and ideas to the forefront, connecting
            to your clients and ideal audience.
          </p>
          <Link href="/contact">
            <a className="">
              <Button text="Let's chat!" />
            </a>
          </Link>
        </motion.div>
      </section>
    </div>
  )
}

export default HomeAbout
