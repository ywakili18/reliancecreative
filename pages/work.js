import React from 'react'
import WorkCard from '../components/work-components/WorkCard'
import Head from 'next/head'
import { motion } from 'framer-motion'
const Work = () => {
  return (
    <motion.div
      className="mt-40 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Head>
        <title>
          Work | Reliance Digital Creative | Web Design, Development, SEO
        </title>
        <meta
          name="description"
          content="Reliance Digital Creative: Work - Munchiez, a web design project for a start up based company based out of the SF Bay Area. Reliance Digital Creative offers Web Design, SEO, Web Development, Branding, and Content writing services for your business."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <h1 className="text-center font-bold text-3xl sm:text-5xl mb-10">
        <span className="font-thin">Recent</span> Work
      </h1>
      <WorkCard />
    </motion.div>
  )
}

export default Work
