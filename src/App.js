import './App.css'
import 'semantic-ui-css/semantic.min.css'
import Header from './Header/Header'
import Projects from './Projects/Projects'
import AboutMe from './AboutMe/AboutMe'
import Skills from './Skills/Skills'
import DividerHorizontal from './DividerHorizontal/DividerHorizontal'

function App() {
  return (
    <div className="App">
      <Header />
      {/* <DividerHorizontal /> */}
      <Projects />
      <AboutMe />
      <Skills />
    </div>
  )
}

export default App
