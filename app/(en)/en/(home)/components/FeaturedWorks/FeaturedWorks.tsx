'use client';

import { useState } from 'react';
import styles from './FeaturedWorks.module.css';
import Image from 'next/image';

interface Artwork {
  id: number;
  title: string;
  imageUrl: string;
  year: string;
  technique: string;
  price: string;
  size: string;
}

const featuredWorks: Artwork[] = [
  {
    id: 1,
    title: "Winter Sun",
    imageUrl: "/artworks/1.webp",
    year: "2025",
    technique: "Canvas, oil",
    price: "Upon request",
    size: "50x70 cm"
  },
  {
    id: 2,
    title: "Evening Sochi",
    imageUrl: "/artworks/27.webp",
    year: "2022",
    technique: "Canvas, oil",
    price: "Upon request",
    size: "50x70 cm"
  },
  {
    id: 3,
    title: "Red Yacht",
    imageUrl: "/artworks/28.webp",
    year: "2022",
    technique: "Canvas, oil",
    price: "Upon request",
    size: "50x70 cm"
  },
];

export default function FeaturedWorks() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className={styles.featuredWorks} id='gallery'>
      <div className={styles.container}>
        <h2 className={styles.title}>Available artworks</h2>
        <div className={styles.grid}>
          {featuredWorks.map((work) => (
            <div 
              key={work.id} 
              className={styles.artworkCard}
              onMouseEnter={() => setHoveredId(work.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className={styles.imageWrapper}>
                <Image 
                  src={work.imageUrl} 
                  alt={work.title}
                  width={400}
                  height={500}
                  className={styles.image}
                />
                <div className={`${styles.overlay} ${hoveredId === work.id ? styles.visible : ''}`} />
              </div>
              <div className={styles.info}>
                <h3 className={styles.artworkTitle}>{work.title}</h3>
                <div className={styles.details}>
                  <span className={styles.price}>{work.price}</span>
                  <span className={styles.size}>{work.size}</span>
                </div>
                <div className={styles.meta}>
                  <span className={styles.year}>{work.year}</span>
                  <span className={styles.technique}>{work.technique}</span>
                </div>
                {/* <button className={styles.buyButton}>
                  Buy
                </button> */}
              </div>
            </div>
          ))}
        </div>
        {/* <div className={styles.viewMore}>
          <a href="/shop" className={styles.viewMoreButton}>
            View all works
            <span className={styles.arrow}>→</span>
          </a>
        </div> */}
      </div>
    </section>
  );
} 