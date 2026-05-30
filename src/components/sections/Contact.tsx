import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.info}>
          <h2>Get in Touch</h2>
          <p className="subheading">We'd love to hear from you</p>
          
          <div className={styles.details}>
            <div className={styles.detailItem}>
              <h3>📍 Location</h3>
              <p>123 Coffee Street, Brew City</p>
              <p>Business District, BC 45678</p>
            </div>
            
            <div className={styles.detailItem}>
              <h3>📞 Phone</h3>
              <p>+1 (555) 123-4567</p>
              <p>For Cafe Owners: +1 (555) 999-8888</p>
            </div>
            
            <div className={styles.detailItem}>
              <h3>✉️ Email</h3>
              <p>hello@dipnbite.com</p>
              <p>partnerships@dipnbite.com</p>
            </div>
            
            <div className={styles.detailItem}>
              <h3>🕒 Hours</h3>
              <p>Mon-Fri: 8:00 AM - 10:00 PM</p>
              <p>Sat-Sun: 9:00 AM - 11:00 PM</p>
            </div>
          </div>
        </div>

        <div className={styles.mapContainer}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10000!2d-122.4!3d37.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQyJzAwLjAiTiAxMjLCsDI0JzAwLjAiVw!5e0!3m2!1sen!2sus!4v1234567890" 
            className={styles.map} 
            loading="lazy" 
            title="Cafe Location Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
