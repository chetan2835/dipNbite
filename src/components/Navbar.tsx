import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`${styles.navbar} glass`}>
      <div className={styles.logo}>
        <Link to="/">Dip N Bite</Link>
      </div>
      
      <div className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
        <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
        <a href="#about" onClick={() => setIsOpen(false)}>About</a>
        <a href="#menu" onClick={() => setIsOpen(false)}>Menu</a>
        <a href="#gallery" onClick={() => setIsOpen(false)}>Gallery</a>
        <a href="#events" onClick={() => setIsOpen(false)}>Events</a>
        <a href="#reservations" onClick={() => setIsOpen(false)}>Reservations</a>
        <a href="#testimonials" onClick={() => setIsOpen(false)}>Testimonials</a>
        <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
      </div>

      <div className={styles.hamburger} onClick={toggleMenu}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </div>
    </nav>
  );
}
