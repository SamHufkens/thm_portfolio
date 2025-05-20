import './App.css'
import AboutMeSection from './components/AboutMeSection'
import FooterSection from './components/FooterSection'
import HeroSection from './components/HeroSection'
import Internship from './components/InternshipSection'
import ProjectSection from './components/ProjectSection'
import { Navbar } from './components/navbar'

function App() {

  return (
    <div className='dark:bg-darkBackground overflow-x-hidden scroll-smooth'>
      <Navbar/>
      <HeroSection />
      <AboutMeSection />
      <Internship />
      <ProjectSection />
      <FooterSection />
    </div>
  )
}

export default App
