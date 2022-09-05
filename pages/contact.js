import Head from 'next/head'
import { motion } from 'framer-motion'
import Image from 'next/image'
const contact = () => {
  const divStyle = {
    display: 'none'
  }
  return (
    <div className="lg:flex gap-20">
      {' '}
      <motion.div
        className="mt-40  sm:w-1/2 m-auto shadow-lg sm:p-10 bg-black border-white  text-white "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Head>
          <title>
            Contact | Reliance Digital | Web Design, Development, SEO services |
            Branding Located in the San Francisco Bay Area | Silicon Valley
          </title>
          <meta
            name="description"
            content="Contact us: Located in the San Francisco Bay Area, Reliance Digital Creative offers web design and development, SEO, branding and content writing services."
          />
          <link rel="icon" href="/favicon.png" />
        </Head>
        <div className="sm:flex flex-col text-center">
          <h1 className="text-2xl sm:text-4xl p-2 font-bold space">
            Hi there!
          </h1>
          <span className="m-auto text-center text-lg">
            Fill out the form below or
            <a
              href="tel:5108707804"
              className="text-emerald-600 hover:underline p-2"
            >
              call us today!
            </a>
          </span>
        </div>

        <form
          action="https://formsubmit.co/reliancedigitalcreative@gmail.com"
          method="POST"
          className="w-5/6 m-auto sm:w-full"
        >
          <div className="flex flex-col md:gap-6 mt-10">
            <input type="text" name="_honey" style={divStyle} />
          </div>
          <div className="md:gap-6">
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="Name"
                className="block py-2.5 px-0 w-full text-xl text-white bg-transparent border-0 border-b border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-emerald-600 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-emerald-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                First Name
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="Name"
                className="block py-2.5 px-0 w-full text-xl text-white bg-transparent border-0 border-b border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-emerald-600 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-emerald-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Last Name
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                name="phone number"
                className="block py-2.5 px-0 w-full text-xl text-white bg-transparent border-0 border-b border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-emerald-600 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-emerald-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Phone number (123-456-7890)
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="email"
                name="email"
                className="block py-2.5 px-0 w-full text-xl text-white bg-transparent border-0 border-b border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-emerald-600 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-emerald-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Email
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="company"
                className="block py-2.5 px-0 w-full text-xl text-white bg-transparent border-0 border-b border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-emerald-600 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-emerald-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Company
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <textarea
                type="text"
                name="message"
                className="block py-2.5 px-0 w-full text-xl text-white bg-transparent border-0 border-b border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-emerald-600 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-emerald-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Tell us about your project
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="border border-white py-2 px-4 hover:text-black hover:bg-white transition-all"
          >
            Submit
          </button>
        </form>
      </motion.div>
      <aside className="w-full lg:w-1/2 mt-52">
        <Image
          alt="Person holding tablet using google search"
          src="/horizon.png"
          layout="responsive"
          height={'100%'}
          width={'100%'}
          objectFit="contain"
          priority
        />
      </aside>
    </div>
  )
}

export default contact
