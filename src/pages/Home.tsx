import Navbar from '../components/Navbar';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import FeaturedMenu from '../components/sections/FeaturedMenu';
import Gallery from '../components/sections/Gallery';
import Interactive3D from '../components/sections/Interactive3D';
import Reservations from '../components/sections/Reservations';
import Events from '../components/sections/Events';
import Testimonials from '../components/sections/Testimonials';
import Contact from '../components/sections/Contact';
import Footer from '../components/Footer';
import FreelancerCTA from '../components/FreelancerCTA';

export default function Home() {
  return (
    <div style={{ backgroundColor: 'var(--color-background)' }}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <FeaturedMenu />
        <Interactive3D />
        <Gallery />
        <Events />
        <Testimonials />
        <Reservations />
        <Contact />
      </main>
      <Footer />
      <FreelancerCTA />
    </div>
  );
}
