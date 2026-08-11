import Navbar from '../components/layout/Navbar';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Activities from '../components/home/Activities';
import WhyUs from '../components/home/WhyUs';
import Stats from '../components/home/Stats';
import Gallery from '../components/home/Gallery';
import Contact from '../components/home/Contact';
import Footer from '../components/layout/Footer';

function Home() {
  return (
    <div className="min-h-screen bg-[#FDFCF8] text-[#0A1A05] font-sans selection:bg-[#3E6B27] selection:text-white">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Activities />
        <WhyUs />
        <Stats />
        <Gallery />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default Home;