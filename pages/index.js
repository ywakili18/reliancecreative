import Head from 'next/head'
import { motion } from 'framer-motion'
import HomeAbout from '../components/home-components/HomeAbout'
export default function Home() {
  const headers = [
    { name: 'Design' },
    { name: 'Develop' },
    { name: 'Optimize' }
  ]
  return (
    // fixed position of "scroll" causes issues with height
    <div className="">
      <Head>
        <title>
          Reliance Digital | Web Design, Development, SEO services | Brand
          Located in the San Francisco Bay Area | Silicon Valley
        </title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className="p-8 sm:p-20  lg:flex  md:gap-24  sm:mt-36 mt-6">
        <motion.h1
          className="text-5xl md:text-8xl font-semibold mt-10 mb-10 sm:mt-0 sm:mb-0"
          initial={{ opacity: 0, x: -100 }}
          //animation of component appearence
          animate={{ opacity: 1, x: 0 }}
          // how your element will appears f.e(duration in seconds)
          transition={{ delay: 1 }}
        >
          {headers.map((header) => (
            <p
              key={header.name}
              className="font-bold text-transparent  bg-clip-text bg-gradient-to-r from-stone-600 to-lime-700"
            >
              {header.name}
            </p>
          ))}
        </motion.h1>
        {/* main section */}
        <div>
          <motion.h2
            className="text-lg md:text-2xl mt-5"
            initial={{ opacity: 0 }}
            //animation of component appearence
            animate={{
              opacity: 1
            }}
            // how your element will appears f.e(duration in seconds)
            transition={{ delay: 1.5 }}
          >
            <span>
              <span className="font-bold">
                Web Development, Web Design, SEO, Branding.
              </span>{' '}
              We help create and build your idea from the ground up.
            </span>
            <p className="mt-5">
              Located and serving the San Francisco Bay Area and Silicon Valley,
              we are here for your business to achieve
              <span className="font-bold"> growth and results</span>.
            </p>
            <p className="mt-5 hover-underline-animation">
              That&apos;s our bottom line.
            </p>
          </motion.h2>
          <motion.h3
            className="text-base md:text-md mt-10 text-stone-400 tracking-[3px] font-light"
            initial={{ y: -100 }}
            //animation of component appearence
            animate={{
              y: 0
            }}
            transition={{ delay: 0.1 }}
          >
            RELIANCE DIGITAL CREATIVE
          </motion.h3>
        </div>
      </main>
      <section>
        <HomeAbout />
      </section>
    </div>
  )
}
