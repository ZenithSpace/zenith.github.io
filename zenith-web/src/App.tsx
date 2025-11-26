
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Journey from './components/Journey';
import Rover from './components/Rover';
import Team from './components/Team';
import Gallery from './components/Gallery';
import Partners from './components/Partners';
import Sponsorship from './components/Sponsorship';
import Contact from './components/Contact';
import Footer from './components/Footer';

import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="bg-zenith-main min-h-screen text-white font-sans selection:bg-zenith-sub selection:text-white">
        <Navbar />
        <Hero />
        <About />
        <Journey />
        <Rover />
        <Team />
        <Gallery />
        <Partners />
        <Sponsorship />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
