import styles from './Events.module.css';

const events = [
  {
    id: 1,
    title: 'Live Acoustic Night',
    date: 'Every Friday, 8:00 PM',
    desc: 'Unwind to the soulful tunes of local artists while enjoying our signature brews and bites.',
    image: 'https://images.unsplash.com/photo-1516280440502-86107bd6a988?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Coffee Tasting Workshop',
    date: '1st Saturday of the Month, 10:00 AM',
    desc: 'Learn the art of brewing from our master baristas. Discover notes, origins, and techniques.',
    image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Couples Special Dinner',
    date: 'Sundays, 7:00 PM',
    desc: 'A curated 5-course meal with ambient lighting, perfect for a romantic evening.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop'
  }
];

export default function Events() {
  return (
    <section id="events" className={styles.eventsSection}>
      <div className={styles.header}>
        <h2>Upcoming Events</h2>
        <p className="subheading">Join us for special moments</p>
      </div>

      <div className={styles.timeline}>
        {events.map((event, index) => (
          <div key={event.id} className={`${styles.eventCard} ${index % 2 === 0 ? styles.left : styles.right}`}>
            <div className={styles.cardInner}>
              <div className={styles.imageContainer}>
                <img src={event.image} alt={event.title} />
              </div>
              <div className={`${styles.content} glass`}>
                <h3>{event.title}</h3>
                <p className={styles.date}>{event.date}</p>
                <p className={styles.desc}>{event.desc}</p>
                <button className="btn" style={{ padding: '0.8rem 2rem', marginTop: '1rem', background: 'var(--color-secondary)', color: 'var(--color-primary)' }}>Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
