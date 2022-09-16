import Head from 'next/head'
import { motion } from 'framer-motion'
import HomeAbout from '../components/home-components/HomeAbout'
import HomeServices from '../components/home-components/HomeServices'
import HomeFooter from '../components/home-components/HomeFooter'
import HomeFaq from '../components/home-components/HomeFaq'
import Link from 'next/link'
export default function Home() {
  return (
    // fixed position of "scroll" causes issues with height
    <div>
      <Head>
        <title>
          Reliance Digital Creative | Web Design, Development, SEO | Bay Area
        </title>
        <meta
          name="description"
          content="Located in the San Francisco Bay Area, Reliance Digital Creative offers web design and development, SEO, branding and content writing services."
        />
      </Head>
      <motion.main
        className="p-8 flex gap-16 sm:gap-10 h-screen home flex-col justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="text-left flex items-center text-5xl mt-80 sm:mt-96
          md:text-7xl font-semibold 
            sm:mb-14
           text-white "
          initial={{ opacity: 0, y: -20 }}
          //animation of component appearence
          animate={{ opacity: 1, y: 0 }}
          // how your element will appears f.e(duration in seconds)
          transition={{ ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }}
        >
          Design. Develop. Optimize.
        </motion.h1>

        {/* main section */}
        <div className=" text-white sm:w-2/3 flex flex-col">
          <motion.h2
            className="text-lg md:text-2xl"
            initial={{ opacity: 0 }}
            //animation of component appearence
            animate={{
              opacity: 1
            }}
            // how your element will appears f.e(duration in seconds)
            transition={{ delay: 1 }}
          >
            <span>
              <span className="font-bold ">
                Web Development, Web Design, SEO, Branding.
              </span>{' '}
              We help create and build your idea from the ground up.
            </span>
            <p className="mt-5">
              Located and serving the San Francisco Bay Area and Silicon Valley,
              we are here for your business to achieve
              <span> growth and results</span>.
            </p>
            <p className="mt-5">That&apos;s our bottom line.</p>
            <div className="mt-5">
              <Link href="/services">
                <a className="border border-white p-2 hover:bg-white hover:border-black hover:text-black transition-all text-xl">
                  Learn more about us
                </a>
              </Link>
            </div>
          </motion.h2>

          <motion.h3
            className="text-base md:text-md mt-10 tracking-[3px] font-light mb-40"
            initial={{ opacity: 0 }}
            //animation of component appearence
            animate={{
              opacity: 1
            }}
            transition={{ delay: 0.3 }}
          >
            RELIANCE DIGITAL CREATIVE
          </motion.h3>
        </div>
      </motion.main>
      <section id="dream" className="border border-transparent">
        <HomeAbout />
      </section>
      <section>
        <HomeServices />
      </section>{' '}
      <section className="bg-black">
        <HomeFaq />
      </section>
      <section>
        {' '}
        <HomeFooter />
      </section>
    </div>
  )
}
