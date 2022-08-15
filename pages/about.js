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
          About | Reliance Digital | Web Design, Development, SEO services |
          Branding Located in the San Francisco Bay Area | Silicon Valley
        </title>
        <meta
          name="description"
          content="Reliance Digital Creative: About page"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="mt-32">
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/lol.jpg"
            alt="About us. City background"
            layout="responsive"
            height={2000}
            width={4000}
            priority
            className="brightness-50"
          />
          <h1 className=" text-white text-3xl sm:text-7xl centered">
            About us
            <div className="sm:text-xl text-xs mt-10">
              <p>We love creating digital experiences.</p>
              <p>
                Right here, in the heart of the Bay Area and Silicon Valley.
              </p>
            </div>
          </h1>
        </motion.div>
        <motion.div className=" text-black h-auto md:w-1/2 m-auto p-10 md:p-20">
          <h2 className="text-2xl sm:text-5xl text-emerald-400 font-bold">
            Who we are
          </h2>
          <div className="text-sm sm:text-lg mt-5">
            <p className="">
              Reliance Digital Creative, founded in 2021, is located in the San
              Francisco Bay Area, CA. Our team has over 5+ years specializing in
              creating interactive experiences on the web - we simply love what
              we do. Our focus is building scalable, high quality, responsive
              sites to establish businesses and brands digitally.
            </p>
            <p className="mt-5">
              We have experience developing wordpress, webflow, and fully custom
              sites that tailors to your business needs. Each site is also
              optimized for SEO and accessibility, ensuring your brand is
              reached to your clients effectively, increasing your engagement,
              sales, and profits.
            </p>
          </div>
        </motion.div>
        <motion.div className="bg-emerald-50 text-black h-auto sm:p-10">
          <h2 className="text-center text-3xl sm:text-5xl text-emerald-400 font-bold p-10">
            Our values
          </h2>
          <div className="flex flex-col w-3/4 m-auto gap-5">
            <h3 className="flex gap-1 text-lg sm:text-2xl justify-center md:justify-start">
              Satisfaction <VscWorkspaceTrusted className="mt-1 ml-1" />
            </h3>
            <p className="text-sm sm:text-lg">
              We are committed to satisfying our clients. Our approach is
              thorough and efficient. We take the time to fully understand each
              client&apos; business needs, audience, and how it operates. Then
              we strategize and plan for executing site and brand launch.
              Finally we launch the final product and look to evolving the brand
              for the future.
            </p>
            <h3 className="flex gap-1 text-lg sm:text-2xl justify-center md:justify-start">
              Quality <FiThumbsUp className="mt-1 ml-1" />
            </h3>
            <p className="text-sm sm:text-lg">
              We are committed to the best quality for our clients. Each digital
              experience is built with thought of scale, responsive for any
              device, and efficiently deliver the product on time.
            </p>
            <h3 className="flex gap-1 text-lg sm:text-2xl justify-center md:justify-start">
              Integrity <FaRegHandshake className="mt-1 ml-1" />
            </h3>
            <p className="text-sm sm:text-lg">
              We are committed to respect, trust, and holding ourselves
              accountable to the highest standard. Honesty and transparency is
              incredibly important to us at Reliance Digital Creative - to
              ensure you have faith in us to deliver the best product possible.
            </p>
            <div className="p-10"></div>
          </div>
        </motion.div>
      </main>
    </motion.div>
  )
}

export default about
