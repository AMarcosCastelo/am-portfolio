import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import Head from 'next/head'

import PageWrapper from 'components/PageWrapper'

import { LIGHT_THEME, GlobalStyles } from 'styles'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={LIGHT_THEME}>
      <Head>
        <title>Antonio Marcos Castelo</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092B" />
        <meta
          name="description"
          content="A simple portfolio to showcase my skills as a front-end developer"
        />
      </Head>
      <GlobalStyles />

      <PageWrapper>
        <Component {...pageProps} />
      </PageWrapper>
    </ThemeProvider>
  )
}

export default App
