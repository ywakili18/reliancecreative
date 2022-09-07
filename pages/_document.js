import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@100;200;300;400;500&display=swap"
            rel="stylesheet"
          />
          <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-PHQ1S0S147"
            strategy="lazyOnload"
          ></Script>
          <Script id="google-analytics" strategy="lazyOnload">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'GA_MEASUREMENT_ID');
        `}
          </Script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
