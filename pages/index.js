import Head from 'next/head'
import { motion } from 'framer-motion'
import HomeAbout from '../components/home-components/HomeAbout'
import HomeServices from '../components/home-components/HomeServices'
import HomeFooter from '../components/home-components/HomeFooter'
import Link from 'next/link'
export default function Home() {
  const headers = [
    { name: 'Design' },
    { name: 'Develop' },
    { name: 'Optimize' }
  ]
  return (
    // fixed position of "scroll" causes issues with height
    <div>
      <Head>
        <title>
          Reliance Digital | Web Design, Development, SEO services | Branding
          Located in the San Francisco Bay Area | Silicon Valley
        </title>
        <meta
          name="description"
          content="Located in the San Francisco Bay Area, Reliance Digital Creative offers web design and development, SEO, branding and content writing services."
        />
      </Head>
      <main className="p-8 sm:p-20  lg:flex  md:gap-24  sm:mt-16 mt-40 h-auto ">
        <motion.h1
          className="text-6xl md:text-7xl font-semibold mt-14 mb-10 sm:mt-40 sm:mb-0 header1  p-10"
          initial={{ opacity: 0, x: -100 }}
          //animation of component appearence
          animate={{ opacity: 1, x: 0 }}
          // how your element will appears f.e(duration in seconds)
          transition={{ delay: 0.5 }}
        >
          {headers.map((header) => (
            <p
              key={header.name}
              className="font-bold text-transparent  bg-clip-text bg-gradient-to-r from-emerald-300 to-emerald-500"
            >
              {header.name}
            </p>
          ))}
        </motion.h1>
        {/* main section */}
        <div className="sm:mt-40 mt-24">
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
            <div className="mt-5">
              <Link href="/services">
                <a className="border border-black p-2 hover:bg-emerald-300 transition-all text-xl rounded">
                  Learn more about us
                </a>
              </Link>
            </div>
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
      <section>
        <HomeServices />
      </section>
      <section>
        {' '}
        <HomeFooter />
      </section>
    </div>
  )
}
