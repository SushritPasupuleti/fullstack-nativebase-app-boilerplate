import { Provider } from 'ui/Provider';
import Head from 'next/head'
import React from 'react'
// import 'raf/polyfill'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Full Stack App Example</title>
        <meta
          name="description"
          content="Expo + Next.js with Turborepo + NativeBase"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default MyApp
