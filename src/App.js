import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import Welcome from './components/Welcome/WelcomeAbout'
import Projects from './components/Projects/Projects'
import Members from './components/Skills/Skills'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

import './App.css'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id='top' className={`${themeName} app`}>
      <Header />

      <main>
        <Welcome />
        <Members/>
        <Projects />
   
        
      </main>

      <ScrollToTop />
     
    </div>
  )
}

export default App
