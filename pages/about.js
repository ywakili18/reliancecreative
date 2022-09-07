import React from 'react'
import { motion } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'
import { VscWorkspaceTrusted } from 'react-icons/vsc'
import { FiThumbsUp } from 'react-icons/fi'
import { FaRegHandshake } from 'react-icons/fa'
const about = () => {
  return (
    <motion.div className="">
      <Head>
        <title>
          About | Reliance Digital Creative| Web Design, Development, SEO
        </title>
        <meta
          name="description"
          content="About us: Located in the San Francisco Bay Area, Reliance Digital Creative offers web design and development, SEO, branding and content writing services."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="lg:mt-[.05em]  mt-32 ">
        {/* image container */}
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/bayarea.jpg"
            alt="gray abstract shapes"
            layout="responsive"
            height={900}
            width={1200}
            priority
            className="brightness-50"
          />

          <div className="centered flex md:flex-row flex-col justify-evenly md:gap-20 lg:gap-80 w-full">
            <aside className="text-center lg:text-left lg:ml-5">
              <p className="text md:text-lg text-gray-300 tracking-wide ml-2 mb-5">
                About us
              </p>
              <h1 className=" text-white text-2xl md:text-5xl lg:text-[5em]   font-thin">
                Rooted in{' '}
                <span className="hover:text-teal-500 font-bold transition-all">
                  digital,
                </span>{' '}
                based out of the{' '}
                <span className="hover:text-emerald-500 font-bold transition-all">
                  Bay Area
                </span>
              </h1>
              <motion.h3
                className="text-sm md:text-md mt-5 sm:mt-10 tracking-[3px] font-light  text-gray-400"
                initial={{ opacity: 0 }}
                //animation of component appearence
                animate={{
                  opacity: 1
                }}
                transition={{ delay: 0.3 }}
              >
                RELIANCE DIGITAL CREATIVE
              </motion.h3>
            </aside>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex md:flex-row flex-col justify-evenly md:gap-20 lg:gap-80 w-full">
            <aside className="text-left lg:text-left lg:ml-5">
              <div className="flex flex-col text-white items-center">
                <p className="font-thin text-gray-200 mt-10  text-base lg:text-4xl">
                  Our history
                </p>
                <div className="text-xs sm:text-xl lg:text-3xl w-3/4 sm:w-1/2 m-auto flex flex-col gap-5 font-thin ">
                  {' '}
                  <p className="mt-5">
                    Reliance Digital Creative, founded in 2021, is located in
                    the{' '}
                    <span className="font-normal hover:text-emerald-500 tracking-tighter transition-all">
                      San Francisco Bay Area, CA.
                    </span>{' '}
                    Our team has over 10+ years specializing in creating
                    interactive experiences on the web - we simply love what we
                    do.
                  </p>
                  <p>
                    <span className="font-bold">
                      Our focus is building scalable, high quality, responsive
                      sites to establish businesses and brands digitally.
                    </span>{' '}
                    We develop and design webflow and fully custom sites that
                    tailors to your business needs. Each site is also optimized
                    for SEO and accessibility, ensuring your brand is reached to
                    your clients effectively,{' '}
                    <span className="font-bold">
                      increasing your engagement, sales, and profits.
                    </span>
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </motion.div>
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/minpeople.jpg"
            alt="gray abstract shapes"
            layout="responsive"
            height={900}
            width={1200}
            priority
            className="brightness-50"
          />

          <div className="centered flex md:flex-row flex-col justify-evenly md:gap-20 lg:gap-80 w-full">
            <aside className="text-left lg:text-left lg:ml-5">
              <div className="flex flex-col text-white">
                <p className=" text-gray-200 mt-10 text-center text-base lg:text-4xl">
                  Core Values
                </p>
              </div>
            </aside>
          </div>
        </motion.div>
        <div className="flex flex-col w-3/4 m-auto gap-5 text-white tracking-tight font-normal">
          <h3 className="flex gap-1 text-lg sm:text-2xl justify-center md:justify-start font-normal  tracking-tight">
            Satisfaction <VscWorkspaceTrusted className="mt-1 ml-1" />
          </h3>
          <p className="text-sm sm:text-lg">
            We are committed to satisfying our clients. Our approach is thorough
            and efficient. We take the time to fully understand each
            client&apos;s business needs, audience, and how it operates. Then we
            strategize and plan for executing site and brand launch. Finally we
            launch the final product and look to evolve the brand for the
            future.
          </p>
          <h3 className="flex gap-1 text-lg sm:text-2xl justify-center md:justify-start  tracking-tight">
            Quality <FiThumbsUp className="mt-1 ml-1" />
          </h3>
          <p className="text-sm sm:text-lg ">
            We are committed to the best quality for our clients. Each digital
            experience is built with thought of scale, responsiveness for any
            device, and efficiently deliver the product on time.
          </p>
          <h3 className="flex gap-1 text-lg sm:text-2xl justify-center md:justify-start  tracking-tight">
            Integrity <FaRegHandshake className="mt-1 ml-1" />
          </h3>
          <p className="text-sm sm:text-lg ">
            We are committed to respect, trust, and holding ourselves
            accountable to the highest standard. Honesty and transparency is
            incredibly important to us at Reliance Digital Creative - to ensure
            you have faith in us to deliver the best product possible.
          </p>
        </div>
      </main>
    </motion.div>
  )
}

export default about
