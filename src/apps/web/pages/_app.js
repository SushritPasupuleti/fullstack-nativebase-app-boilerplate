import { Provider } from 'ui/Provider';
import Head from 'next/head'
import React from 'react'
import 'raf/polyfill'
import { ReduxWrapperForNext } from 'ui/redux/store';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Full Stack App Example</title>
        <meta
          name="description"
          content="Expo + Next.js with Turborepo + NativeBase"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no, user-scalable=0"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default ReduxWrapperForNext.withRedux(MyApp);