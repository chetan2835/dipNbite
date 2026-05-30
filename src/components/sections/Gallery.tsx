import { useState } from 'react';
import styles from './Gallery.module.css';

const images = [
  'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1445116572660-236099ec97a0?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1507133750076-027ee85f062c?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1495474472201-4475ea751d38?q=80&w=800&auto=format&fit=crop'
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className={styles.gallery}>
      <div className={styles.header}>
        <h2>Our Ambiance</h2>
        <p className="subheading">A glimpse into the Dip N Bite experience</p>
      </div>

      <div className={styles.masonry}>
        {images.map((src, index) => (
          <div 
            key={index} 
            className={styles.masonryItem}
            onClick={() => setSelectedImage(src)}
          >
            <img src={src} alt={`Gallery ${index + 1}`} />
            <div className={styles.overlay}>
              <span>View</span>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className={styles.lightbox} onClick={() => setSelectedImage(null)}>
          <div className={styles.lightboxContent} onClick={e => e.stopPropagation()}>
            <img src={selectedImage} alt="Enlarged" />
            <button className={styles.closeBtn} onClick={() => setSelectedImage(null)}>✕</button>
          </div>
        </div>
      )}
    </section>
  );
}
