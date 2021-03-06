import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material'
import theme from '../components/Theme'
import Header from '../components/Header'
function MyApp({ Component, pageProps }: AppProps) {
  return (
  <ThemeProvider theme={theme}>
    <Header />
    <Component {...pageProps} />
  </ThemeProvider>
  )
}

export default MyApp
