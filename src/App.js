import './App.css'
import 'semantic-ui-css/semantic.min.css'
import Header from './Header/Header'
import Projects from './Projects/Projects'
import About from './About/About'
import Skills from './Skills/Skills'
import DividerHorizontal from './DividerHorizontal/DividerHorizontal'

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      {/* <DividerHorizontal /> */}
      <Projects />
      <Skills />
    </div>
  )
}

export default App
