import '../styles/globals.css'
import { Space_Grotesk } from '@next/font/google'
import fancyFont from '@next/font/local'

const mainfont = Space_Grotesk({
  subsets: ['latin-ext'],
  variable: '--font-main',
});

const fancyfont = fancyFont({ 
  src: '../styles/font/GulfsDisplay-Expanded.woff2',
  variable: '--font-fancy',
});

function MyApp({ Component, pageProps }) {
  return (
    <main className={`${mainfont.variable} ${fancyfont.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
