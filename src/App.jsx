import { useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import WhyTheName from './components/WhyTheName'
import Story from './components/Story'
import Features from './components/Features'
import Screenshots from './components/Screenshots'
import HowItWorks from './components/HowItWorks'
import BetaCta from './components/BetaCta'
import Enquiry from './components/Enquiry'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  const [view, setView] = useState('home')

  const goEnquiry = () => { setView('enquiry'); window.scrollTo(0, 0) }
  const goHome    = () => { setView('home');    window.scrollTo(0, 0) }

  return (
    <>
      <Nav onJoinBeta={goEnquiry} onHome={goHome} view={view} />
      {view === 'enquiry' ? (
        <Enquiry onBack={goHome} />
      ) : (
        <main>
          <Hero       onJoinBeta={goEnquiry} />
          <WhyTheName />
          <Story />
          <Features />
          <Screenshots />
          <HowItWorks onJoinBeta={goEnquiry} />
          <BetaCta    onJoinBeta={goEnquiry} />
        </main>
      )}
      <Footer onJoinBeta={goEnquiry} />
    </>
  )
}
