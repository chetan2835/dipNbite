import { useState } from 'react';
import styles from './FeaturedMenu.module.css';

const categories = ['All', 'Coffee', 'Pizza', 'Burgers', 'Desserts'];

const menuItems = [
  {
    id: 1,
    name: 'Hazelnut Cappuccino',
    category: 'Coffee',
    desc: 'Rich espresso with creamy steamed milk and roasted hazelnut syrup.',
    price: '$6.00',
    rating: 4.9,
    bestseller: true,
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Truffle Mushroom Pizza',
    category: 'Pizza',
    desc: 'Wood-fired crust, mozzarella, wild mushrooms, and truffle oil.',
    price: '$18.00',
    rating: 4.8,
    bestseller: true,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'The Dip N Bite Burger',
    category: 'Burgers',
    desc: 'Angus beef patty, caramelized onions, cheddar, and signature dip.',
    price: '$14.50',
    rating: 4.7,
    bestseller: false,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 4,
    name: 'Belgian Chocolate Waffle',
    category: 'Desserts',
    desc: 'Warm waffle topped with vanilla bean ice cream and melted chocolate.',
    price: '$12.00',
    rating: 4.9,
    bestseller: true,
    image: 'https://images.unsplash.com/photo-1562376552-0d160a2f9fa4?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 5,
    name: 'Iced Caramel Macchiato',
    category: 'Coffee',
    desc: 'Chilled espresso over milk, infused with vanilla and caramel drizzle.',
    price: '$6.50',
    rating: 4.8,
    bestseller: false,
    image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 6,
    name: 'Margherita Classic',
    category: 'Pizza',
    desc: 'Fresh basil, san marzano tomatoes, and buffalo mozzarella.',
    price: '$15.00',
    rating: 4.6,
    bestseller: false,
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=600&auto=format&fit=crop'
  }
];

function TiltCard({ item }: { item: any }) {
  const [style, setStyle] = useState({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    
    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: 'none'
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.5s ease'
    });
  };

  return (
    <div 
      className={`${styles.card} glass`} 
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.imageContainer}>
        <img src={item.image} alt={item.name} className={styles.image} />
        {item.bestseller && <span className={styles.badge}>Bestseller</span>}
      </div>
      <div className={styles.cardContent}>
        <div className={styles.cardHeader}>
          <h3 className={styles.name}>{item.name}</h3>
          <span className={styles.price}>{item.price}</span>
        </div>
        <p className={styles.desc}>{item.desc}</p>
        <div className={styles.footer}>
          <div className={styles.rating}>
            <span>★</span> {item.rating}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FeaturedMenu() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className={styles.featuredMenu}>
      <div className={styles.header}>
        <h2>Signature Delights</h2>
        <p className="subheading">Curated for your cravings</p>
      </div>

      <div className={styles.categories}>
        {categories.map(cat => (
          <button 
            key={cat} 
            className={`${styles.categoryBtn} ${activeCategory === cat ? styles.active : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filteredItems.map(item => (
          <TiltCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
