import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './Hero.module.css';

export default function Hero() {
  const titleRef = useRef(null);
  const taglineRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(titleRef.current, 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.2 }
    )
    .fromTo(taglineRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      "-=0.6"
    )
    .fromTo(buttonsRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.5)' },
      "-=0.4"
    );
  }, []);

  return (
    <section id="home" className={styles.hero}>
      {/* Background Video using a highly reliable Mixkit preview video */}
      <div className={styles.videoContainer}>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className={styles.bgVideo}
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-making-coffee-in-a-coffee-machine-4243-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles.videoOverlay}></div>
      </div>

      <div className={styles.content}>
        <h1 ref={titleRef} className={styles.title}>Dip N Bite</h1>
        <p ref={taglineRef} className={`${styles.tagline} subheading`}>Every Sip Tells A Story</p>
        <div ref={buttonsRef} className={styles.buttons}>
          <a href="#menu" className={`${styles.btn} ${styles.primaryBtn}`}>Explore Menu</a>
          <a href="#reservations" className={`${styles.btn} ${styles.secondaryBtn}`}>Reserve Table</a>
        </div>
      </div>
      
      <div className={styles.scrollIndicator}>
        <div className={styles.mouse}>
          <div className={styles.wheel}></div>
        </div>
      </div>
    </section>
  );
}
