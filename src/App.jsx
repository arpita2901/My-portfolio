import { useState } from 'react'
import { portfolioData } from './data/portfolio'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  const [active, setActive] = useState(0)

  const goTo = (i) => {
    const el = document.getElementById(pages[i].id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const pages = [
    { id: 'intro', number: '01', label: 'INTRO' },
    { id: 'skills', number: '02', label: 'SKILLS' },
    { id: 'projects', number: '03', label: 'PROJECTS' },
    { id: 'contact', number: '04', label: 'CONTACT' },
  ]

  return (
    <div>
      <div className="bg-grid" />
      <div className="bg-glow" />
      <Navbar pages={pages} active={active} onSelect={goTo} />
      <Intro onNavigate={goTo} />
      <Skills />
      <Projects />
      <Contact />
      <footer className="footer">
        <span>{portfolioData.name}</span>
        <span className="footer-dot">·</span>
        <span>Portfolio</span>
      </footer>
    </div>
  )
}
