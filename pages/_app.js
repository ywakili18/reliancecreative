import '../styles/globals.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Head from 'next/head'
import { ColorRing } from 'react-loader-spinner'
import { useState, useEffect } from 'react'

function MyApp({ Component, pageProps, router }) {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
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
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
      )}
    </div>
  )
}

export default MyApp
