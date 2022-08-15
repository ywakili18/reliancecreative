import Head from 'next/head'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import ServiceCard from '../components/services-components/ServiceCard'
const services = () => {
  const cardInfo = [
    {
      header: 'Web Design and Development',
      image: '/webdesign.png',
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
  return (
    <div className="bg-teal-50">
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
      <main className="mt-20">
        <h1 className="text-transparent">Our Services.</h1>
        <motion.div
          className="w-full mt-10 sm:m-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/servicesHeader.png"
            alt="Our services, reliance digital creative. Pen, Smart Phone, and laptop placed next to each other."
            layout="responsive"
            height={760}
            width={1300}
          />
        </motion.div>
        {cardInfo.map((card) => (
          <div key={card.header}>
            <ServiceCard
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
