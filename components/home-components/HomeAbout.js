import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../Button.js'
const HomeAbout = () => {
  return (
    <motion.div className=" text-white lg:p-20 bg-black">
      <section className="md:flex gap-32 mt-40">
        {/* image */}
        <motion.div
          className="w-3/4 sm:w-full sm:ml-10 m-auto  bg-gradient-to-t from-black to-teal-900 sm:mt-10"
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
          className="text-lg text-left md:text-xl lg:text-2xl flex flex-col gap-10   p-10  sm:ml-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <p className="text-2xl font-bold sm:text-4xl space">
            You Dream, We Build, You Grow.
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
    </motion.div>
  )
}

export default HomeAbout
