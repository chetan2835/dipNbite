import styles from './FreelancerCTA.module.css';

export default function FreelancerCTA() {
  return (
    <>
      <div className={`${styles.badge} glass`}>
        <span className={styles.pulse}></span>
        Demo Website – Created by Chetan Punj
      </div>

      <div className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2>Get Your Cafe Website</h2>
          <p>Impress your customers with a premium, 3D-interactive digital presence.</p>
          <a href="mailto:contact@chetanpunj.com" className={`${styles.contactBtn} btn`}>
            Contact Developer
          </a>
        </div>
      </div>
    </>
  );
}
