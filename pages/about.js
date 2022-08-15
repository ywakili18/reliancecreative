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
      <main className="mt-24">
        <h1 className="text-transparent">About us</h1>
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/aboutus1.png"
            alt="About us. City background"
            layout="responsive"
            height={700}
            width={1300}
            priority
          />
        </motion.div>
        <motion.div className="bg-slate-900 text-white h-auto">
          <h2 className="text-center text-4xl sm:text-5xl text-emerald-400 font-bold sm:p-10 p-5">
            Our mission
          </h2>
          <div className="text-lg mt-10 flex flex-col gap-10 text-center sm:text-left">
            <p className="flex flex-col  shadow-md shadow-slate-500/50 rounded-lg p-10 m-auto sm:w-3/4 ">
              <span className="text-center bg-emerald-400 rounded-2xl sm:w-1/4 p-2 sm:p-0 m-auto text-black">
                Who we are
              </span>
              Reliance Digital Creative, founded in 2021, is located in the San
              Francisco Bay Area, CA. With over 5+ years experience specializing
              in creating interactive experiences on the web, we simply love
              what we do.
            </p>
            <p className="flex flex-col shadow-md sm:w-3/4  shadow-slate-500/50 rounded-lg p-10 m-auto">
              <span className="text-center bg-emerald-400 rounded-2xl sm:w-1/4 p-2 sm:p-0 m-auto text-black">
                What we do.
              </span>
              Our focus is building scalable, high quality, responsive sites to
              establish businesses and brands digitally. We have experience
              developing wordpress, webflow, and fully custom sites that tailors
              to your business needs.
            </p>
            <p className="flex flex-col sm:w-3/4 shadow-md shadow-slate-500/50 rounded-lg p-10 m-auto mb-10">
              <span className="text-center bg-emerald-400 rounded-2xl sm:w-1/4 p-2 sm:p-0 m-auto text-black">
                What our focus is.
              </span>
              Each site is also optimized for SEO and accessibility, ensuring
              your brand is reached to your clients effectively, increasing your
              engagement, sales, and profits.
            </p>
          </div>
        </motion.div>
        <motion.div className="bg-slate-900 text-white h-auto sm:p-10">
          <h2 className="text-center text-4xl sm:text-5xl text-emerald-400 font-bold sm:p-10 p-5">
            Our values
          </h2>
          <div className="flex flex-col w-3/4 m-auto gap-5">
            <h3 className="flex gap-1 text-2xl justify-center md:justify-start">
              Satisfaction <VscWorkspaceTrusted className="mt-1 ml-1" />
            </h3>
            <p>
              We are committed to satisfying our clients. Our approach is
              thorough and efficient. We take the time to fully understand each
              client&apos; business needs, audience, and how it operates. Then
              we strategize and plan for executing site and brand launch.
              Finally we launch the final product and look to evolving the brand
              for the future.
            </p>
            <h3 className="flex gap-1 text-2xl justify-center md:justify-start">
              Quality <FiThumbsUp className="mt-1 ml-1" />
            </h3>
            <p>
              We are committed to the best quality for our clients. Each digital
              experience is built with thought of scale, responsive for any
              device, and efficiently deliver the product on time.
            </p>
            <h3 className="flex gap-1 text-2xl justify-center md:justify-start">
              Integrity <FaRegHandshake className="mt-1 ml-1" />
            </h3>
            <p>
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
