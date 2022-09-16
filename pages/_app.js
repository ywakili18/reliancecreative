import '../styles/globals.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import TextReveal from '../components/TextReveal'
function MyApp({ Component, pageProps, router }) {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 4000)
  }, [])

  return (
    <div>
      <Head>
        <title>Reliance Digital Creative | Web Design, Development, SEO</title>
        <meta
          name="description"
          content="Located in the San Francisco Bay Area, Reliance Digital Creative offers web design and development, SEO, branding and content writing services."
        />
        <link rel="icon" href="/logo.png" />
      </Head>

      {!loading ? (
        <>
          <NavBar />
          <Component {...pageProps} key={router.route} />
          <Footer />
        </>
      ) : (
        <TextReveal />
      )}
    </div>
  )
}

export default MyApp
