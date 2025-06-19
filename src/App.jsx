import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import DataEngineering from './components/DataEngineering'
import Automation from './components/Automation'
import Cases from './components/Cases'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <DataEngineering />
      <Automation />
      <Cases />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

