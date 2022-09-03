import Head from 'next/head'
import { motion } from 'framer-motion'
import Image from 'next/image'
import ServiceCard from '../components/services-components/ServiceCard'
const services = () => {
  const cardInfo = [
    {
      id: 'design',
      header: 'Web Design and Development',
      image: '/people.jpg',
      alt: 'Picture of monitor displaying web design',
      buttonText: 'Contact us for more information about our web services.',
      first:
        ' First impressions of websites are 94% related to design and functionality.',
      second:
        'We design, develop, and future-proof responsive websites that is a visual representation of you - your business and brand.',
      third:
        'Whether you need a quick redesign, assistance with your site, or build a fully custom page - we are here for you and your needs.'
    },
    {
      id: 'seo',
      header: 'SEO and Content',
      image: '/seo.png',
      alt: 'Search bar with the text "Search", laptop and coffee cup',
      buttonText: 'Contact us for more information about our SEO services.',
      first: '93% of all online interactions start with a search engine.',
      second:
        'Optimizing your site can be a huge time constraint and reduce time to create new business.',
      third: 'Your webpage needs to be properly indexed and performant.',
      fourth:
        'We are here to place your business at the top with competition analysis, link building, and keyword optimization.'
    },
    {
      id: 'branding',
      header: 'Branding',
      image: '/branding.png',
      alt: 'Branding, sunglasses placed in middle of table next to laptop and hat.',
      buttonText:
        'Contact us for more information about our branding services.',
      first:
        '88% of consumers say authenticity is important when deciding what brands they like and support.',
      second:
        'Your clients want your brand to be honest, authentic, and  trustworthy.',
      third:
        'From your logo - to your content. We can work with your existing logo design or create new logos for you.',
      fourth:
        'Your content will reach to your target audience and impact your business with measureable results. Your brand is you.'
    }
  ]
  const serviceLinks = [
    { href: '#design', name: 'Design & Development' },
    { href: '#seo', name: 'SEO' },
    { href: '#branding', name: 'Branding & Content' }
  ]
  return (
    <div className="bg-black">
      <Head>
        <title>
          Services | Reliance Digital | Web Design, Development, SEO services |
          Branding Located in the San Francisco Bay Area | Silicon Valley
        </title>
        <meta
          name="description"
          content="Contact us: Located in the San Francisco Bay Area, Reliance Digital Creative offers web design and development, SEO, branding and content writing services."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      {/* Main Section */}
      <main className="lg:mt-10 mt-28">
        {/* image container */}
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/peep.jpg"
            alt="About us. City background"
            layout="responsive"
            height={1000}
            width={1200}
            priority
            className="brightness-50"
          />
          <div className="centered flex md:flex-row flex-col justify-evenly md:gap-20 lg:gap-80 w-full ">
            <aside className="text-center lg:text-left lg:ml-5">
              <p className="text-lg text-gray-300 font-thin tracking-widest ml-2 sm:hidden">
                What we do.
              </p>

              <h1 className=" text-white text-2xl md:text-5xl lg:text-[5em]   font-thin">
                We help{' '}
                <span className="hover:text-teal-500 font-bold">create</span>{' '}
                what you{' '}
                <span className="hover:text-emerald-500 font-bold">
                  envision
                </span>
              </h1>
              <motion.h3
                className="text-base md:text-md mt-2 sm:mt-10 tracking-[3px] font-light  text-gray-500"
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
            {/* links container */}
            <aside
              className="md:text-4xl lg:text-7xl text-sm  tracking-wide 
              font-extralight  flex sm:flex-col lg:justify-between justify-center mt-10 sm:mt-0 gap-5 "
            >
              <p className="text-lg text-gray-300 font-thin tracking-widest ml-2 hidden md:inline">
                What we do.
              </p>

              {serviceLinks.map((link) => (
                <a
                  className="sm:hover:text-emerald-500  text-emerald-500 sm:text-gray-600 transition-all duration-500 flex"
                  href={link.href}
                  key={link.href}
                >
                  {link.name}
                </a>
              ))}
            </aside>
          </div>
        </motion.div>
        {cardInfo.map((card) => (
          <div key={card.header}>
            <ServiceCard
              id={card.id}
              header={card.header}
              image={card.image}
              altText={card.alt}
              buttonText={card.buttonText}
              first={card.first}
              second={card.second}
              third={card.third}
              fourth={card.fourth}
            />
          </div>
        ))}
      </main>
    </div>
  )
}

export default services
