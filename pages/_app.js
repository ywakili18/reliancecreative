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
        <link rel="icon" href="/logo1.png" />
      </Head>
      <NavBar />
      <Component {...pageProps} key={router.route} />
      <Footer />
    </div>
  )
}

export default MyApp
