import Head from 'next/head'
import Image from 'next/image'
import About from '../components/about'
import Contact from '../components/contact'
import Footer from '../components/footer'
import Hero from '../components/hero'
import Marquee from '../components/marquee'
import Navigation from '../components/nav'
import ScrollingRibbon from '../components/scrollingRibbon'
import Socials from '../components/socials'
import Sponsors from '../components/sponsors'

export default function Home() {
  return (
    <>
    <Navigation />
    <Hero />
    <Marquee />
    <About />
    <ScrollingRibbon />
    <Sponsors />
    <Socials />
    <Footer />
    </>
  )
}