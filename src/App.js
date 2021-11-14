import './App.css'
import 'semantic-ui-css/semantic.min.css'
import Header from './Header/Header'
import Projects from './Projects/Projects'
import About from './About/About'
import Skills from './Skills/Skills'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
