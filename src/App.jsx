import './App.css';

// Componentes comuns (comuns entre páginas)
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Hero from './components/common/Hero';

// Páginas principais
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import DataEngineering from './pages/DataEngineering';
import Automation from './pages/Automation';
import Cases from './pages/Cases';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';

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
  );
}

export default App;
