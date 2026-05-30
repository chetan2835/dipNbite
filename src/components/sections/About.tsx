import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './About.module.css';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { id: 1, value: 5000, suffix: '+', label: 'Happy Customers' },
  { id: 2, value: 50, suffix: '+', label: 'Signature Dishes' },
  { id: 3, value: 4.9, suffix: '', label: 'Star Rating' },
  { id: 4, value: 3, suffix: '', label: 'Years of Excellence' },
];

function Counter({ endValue, suffix }: { endValue: number; suffix: string }) {
  const [value, setValue] = useState(0);
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: nodeRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.to({ val: 0 }, {
            val: endValue,
            duration: 2,
            ease: 'power2.out',
            onUpdate: function() {
              setValue(this.targets()[0].val);
            }
          });
        },
        once: true
      });
    });
    return () => ctx.revert();
  }, [endValue]);

  return (
    <span ref={nodeRef}>
      {endValue % 1 !== 0 ? value.toFixed(1) : Math.floor(value)}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        
        <div className={styles.left}>
          <h2 className={styles.heading}>The Story Behind Every Cup</h2>
          <p className={styles.text}>
            At Dip N Bite, we believe that coffee is more than just a beverage; it's an experience. 
            Nestled in the heart of the city, our premium cafe blends the warmth of traditional 
            brewing methods with modern culinary artistry. Every bean is carefully selected, 
            every dish crafted with passion.
          </p>
          <div className={styles.statsGrid}>
            {stats.map(stat => (
              <div key={stat.id} className={`${styles.statCard} glass`}>
                <h3 className={styles.statValue}>
                  <Counter endValue={stat.value} suffix={stat.suffix} />
                </h3>
                <p className={styles.statLabel}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.imagePlaceholder}>
            <div className={styles.blob}></div>
            {/* AI Image Generation Placeholder */}
            <img 
              src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=1000&auto=format&fit=crop" 
              alt="Pouring coffee" 
              className={styles.mainImage} 
            />
          </div>
        </div>
        
      </div>
    </section>
  );
}
