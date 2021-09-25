import type { AppProps } from 'next/app'
import { getTokenizer } from "kuromojin"

getTokenizer({dicPath: "/dict"})

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
