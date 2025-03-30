import React from 'react'
import Hero from './Hero'
import Navbar from './Navbar'
import Menu from './Menu'
import About from './About'
import { useMenuClick } from './store/state'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'


const App = () => {
      const {MenuClick, hero, about, skills, projects, contact, handleContactT, handleContactF, handleProjectsT, handleProjectsF, handleSkillsT, handleSkillsF, handleHeroVisible, handleAboutT, handleAboutF, handleHeroT, handleHeroM, handleHeroB, handleMenuClick} = useMenuClick();
    
  
  
  return (
    <>
      <main className='h-[100dvh] w-[100%] '>
        <Navbar />

        <Hero />

        {
          about=='t' && (<About/>) 
        }

        {/* {
          skills=='t' && (<Skills/>) 
        } */}

        {
          projects=='t' && (<Projects/>) 
        }

        {/* {
          contact=='t' && (<Contact/>) 
        } */}
        
      </main>
    </>
  )
}

export default App