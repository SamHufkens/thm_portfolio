import '../App.css'
import AboutMeSection from '../components/AboutMeSection'
import ErasmusSection from '../components/ErasmusSection'
import FooterSection from '../components/FooterSection'
import HeroSection from '../components/HeroSection'
import Internship from '../components/InternshipSection2'
import { Navbar } from '../components/navbar'
import ProjectSection from '../components/ProjectSection'

function Home() {

  return (
    <div className='dark:bg-darkBackground overflow-x-hidden scroll-smooth'>
      <Navbar />
      <HeroSection />
      <AboutMeSection />
      <Internship />
      <ErasmusSection />
      <ProjectSection />
      <FooterSection />
    </div>
  )
}

export default Home
