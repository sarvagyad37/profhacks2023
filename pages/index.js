import Head from 'next/head'
import Image from 'next/image'
import About from '../components/about'
import Hero from '../components/hero'
import Marquee from '../components/marquee'
import Navigation from '../components/nav'
import ScrollingRibbon from '../components/scrollingRibbon'
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
    </>
  )
}