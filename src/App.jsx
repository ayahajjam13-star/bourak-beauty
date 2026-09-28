import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import BeforeAfter from './components/BeforeAfter';
import Gallery from './components/Gallery';
import WhyChoose from './components/WhyChoose';
import InstagramSection from './components/InstagramSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

function App() {
  return (
    <div className="bg-noir min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <BeforeAfter />
      <Gallery />
      <WhyChoose />
      <InstagramSection />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;