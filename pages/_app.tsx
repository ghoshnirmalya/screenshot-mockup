import { ThemeProvider, CSSReset, theme } from '@chakra-ui/core'
import Navbar from '@/components/navbar'

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
