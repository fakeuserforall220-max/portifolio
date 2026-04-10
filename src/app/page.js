'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Highlights from '@/components/Highlights'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import BottomNav from '@/components/BottomNav'
import BackToTop from '@/components/BackToTop'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Highlights />
        <Contact />
      </main>
      <Footer />
      <BottomNav />
      <BackToTop />
    </>
  )
}
