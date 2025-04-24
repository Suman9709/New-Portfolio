import React from 'react'
import HeroPage from './Pages/HeroPage'
import Particles from './Components/Particles'
import Skills from './Pages/Skills'
import Projects from './Pages/Projects'
import ContactPage from './Pages/ContactPage'

const App = () => {
  return (
    <div className='relative bg-black min-h-screen overflow-hidden'>
      <div className='absolute inset-0 z-0'>
        <Particles
          particleColors={['#f20707', '#f20707']}
          particleCount={400}
          particleSpread={5}
          speed={0.1}
          particleBaseSize={120}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <div className='relative z-10 '>
        <HeroPage />
        <Skills/>
        <Projects/>
        <ContactPage/>
      </div>
    </div>
  )
}

export default App
