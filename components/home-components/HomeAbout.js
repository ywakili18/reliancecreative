import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
const HomeAbout = () => {
  return (
    <motion.div className="mt-20 text-white bg-lime-100">
      {/* side text container */}
      <section className="md:flex items-center gap-10">
        <div className="w-5/6 sm:w-3/4 sm:ml-10 m-auto">
          <Image
            src="/7.png"
            alt="Picture of rocket, thoughtful branding, reliance digital creative."
            width={1000}
            height={2000}
            layout="responsive"
          />
        </div>

        {/* text */}
        <div className="text-lg md:text-2xl flex flex-col gap-10 text-black   p-10 ">
          <p className="md:mt-40">
            Based in the San Francisco Bay Area, we are a full service digital
            agency.
          </p>
          <p>
            Our team specializes in web development, UI/UX design, SEO, and
            branding. We create and assist in building stunning websites that
            drive traffic, engagement, leads, and conversion.
          </p>
          <p>
            Our team specializes in web development, UI/UX design, SEO, and
            branding. We create and assist in building stunning websites that
            drive traffic, engagement, leads, and conversion.
          </p>
        </div>
      </section>
    </motion.div>
  )
}

export default HomeAbout
