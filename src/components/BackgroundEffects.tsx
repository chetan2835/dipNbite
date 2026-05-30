import styles from './BackgroundEffects.module.css';

export default function BackgroundEffects() {
  return (
    <div className={styles.bgContainer}>
      <div className={styles.noise}></div>
      <div className={styles.orb1}></div>
      <div className={styles.orb2}></div>
      <div className={styles.orb3}></div>
      <div className={styles.orb4}></div>
    </div>
  );
}
