import '../styles/globals.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Head from 'next/head'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
function MyApp({ Component, pageProps, router }) {
  const { asPath } = useRouter()

  return (
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
        <link rel="icon" href="/logo1.png" />
      </Head>
      <NavBar />
      <Component {...pageProps} key={router.route} />
      <Footer />
    </div>
  )
}

export default MyApp
