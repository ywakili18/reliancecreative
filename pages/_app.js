import '../styles/globals.css'
import NavBar from '../components/NavBar'
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

      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={asPath}
          initial={{ opacity: 0 }}
          //animation of component appearence
          animate={{ opacity: 1 }}
          // how your element will appears f.e(duration in seconds)
          transition={{ delay: 0.1 }}
          // your exit animation
          exit={{ opacity: 0 }}
        >
          <Component {...pageProps} key={router.route} />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default MyApp
