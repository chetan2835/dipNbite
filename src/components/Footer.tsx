import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={`${styles.footer} glass`}>
      <div className={styles.container}>
        
        <div className={styles.brand}>
          <h2>Dip N Bite</h2>
          <p className="subheading">Every Sip Tells A Story</p>
          <div className={styles.socials}>
            {/* Social Icons Placeholder */}
            <a href="#">IG</a>
            <a href="#">FB</a>
            <a href="#">TW</a>
          </div>
        </div>

        <div className={styles.links}>
          <h3>Quick Links</h3>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#reservations">Reservations</a>
        </div>

        <div className={styles.contact}>
          <h3>Contact Us</h3>
          <p>123 Coffee Street, Brew City, BC 45678</p>
          <p>+1 (555) 123-4567</p>
          <p>hello@dipnbite.com</p>
        </div>

        <div className={styles.newsletter}>
          <h3>Newsletter</h3>
          <p>Subscribe for updates and exclusive offers.</p>
          <form className={styles.subscribeForm}>
            <input type="email" placeholder="Your Email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      
      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} Dip N Bite. All rights reserved.</p>
      </div>
    </footer>
  );
}
