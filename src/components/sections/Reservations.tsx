import { useState } from 'react';
import styles from './Reservations.module.css';

export default function Reservations() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="reservations" className={styles.reservations}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2>Reserve Your Table</h2>
          <p className="subheading">Secure your spot for an unforgettable experience</p>
          
          <form className={`${styles.form} glass`} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <input type="text" placeholder="Full Name" required />
              <input type="tel" placeholder="Phone Number" required />
            </div>
            
            <div className={styles.inputGroup}>
              <input type="email" placeholder="Email Address" required />
              <input type="number" placeholder="Number of Guests" min="1" max="20" required />
            </div>
            
            <div className={styles.inputGroup}>
              <input type="date" required />
              <input type="time" required />
            </div>
            
            <button type="submit" className={`${styles.submitBtn} btn`}>
              Confirm Reservation
            </button>
          </form>
        </div>
      </div>

      {isSubmitted && (
        <div className={styles.popup}>
          <div className={`${styles.popupContent} glass`}>
            <h3>Reservation Confirmed!</h3>
            <p>We've sent the details to your email. See you soon!</p>
            <button className="btn" onClick={() => setIsSubmitted(false)}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
}
