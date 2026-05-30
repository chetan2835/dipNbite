import { useState, useEffect } from 'react';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    rating: 5,
    text: '"The truffle mushroom pizza and the hazelnut cappuccino are a match made in heaven. The ambiance is unmatched in the city."',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'David Chen',
    rating: 5,
    text: '"I brought a client here for a meeting and the 3D interactive menu blew them away. Premium experience through and through."',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Emily Roberts',
    rating: 4.9,
    text: '"Best coffee tasting workshop I have ever attended. The baristas are incredibly knowledgeable and passionate."',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop'
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className={styles.testimonialsSection}>
      <div className={styles.header}>
        <h2>Guest Stories</h2>
        <p className="subheading">Don't just take our word for it</p>
      </div>

      <div className={styles.carousel}>
        {testimonials.map((t, index) => (
          <div 
            key={t.id} 
            className={`${styles.card} glass ${index === current ? styles.active : ''}`}
          >
            <div className={styles.quoteIcon}>"</div>
            <p className={styles.text}>{t.text}</p>
            <div className={styles.author}>
              <img src={t.image} alt={t.name} />
              <div>
                <h4>{t.name}</h4>
                <div className={styles.rating}>
                  {'★'.repeat(Math.floor(t.rating))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.dots}>
        {testimonials.map((_, index) => (
          <span 
            key={index} 
            className={`${styles.dot} ${index === current ? styles.activeDot : ''}`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </section>
  );
}
