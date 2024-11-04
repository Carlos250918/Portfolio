import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header.jsx'
import HeroSection from './components/HeroSection.jsx'
import AboutSection from './components/AboutSection.jsx'
import ContactSection from './components/ContactSection.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <HeroSection/>
    <AboutSection />
    <ContactSection />
  </StrictMode>
)
