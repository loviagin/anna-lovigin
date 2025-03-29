'use client';

import { useState } from 'react';
import styles from './FeaturedWorks.module.css';

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
    title: "Шут",
    imageUrl: "/artworks/19.webp",
    year: "2024",
    technique: "Холст, масло",
    price: "По запросу",
    size: "25x20 см"
  },
  {
    id: 2,
    title: "Котята",
    imageUrl: "/artworks/20.webp",
    year: "2024",
    technique: "Холст, масло",
    price: "По запросу",
    size: "30x30 см"
  },
  {
    id: 3,
    title: "Мимоза",
    imageUrl: "/artworks/21.webp",
    year: "2023",
    technique: "Холст на подрамнике, масло",
    price: "По запросу",
    size: "40x30 см"
  }
];

export default function FeaturedWorks() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className={styles.featuredWorks} id='featured'>
      <div className={styles.container}>
        <h2 className={styles.title}>Арты в наличии</h2>
        <div className={styles.grid}>
          {featuredWorks.map((work) => (
            <div 
              key={work.id} 
              className={styles.artworkCard}
              onMouseEnter={() => setHoveredId(work.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className={styles.imageWrapper}>
                <img 
                  src={work.imageUrl} 
                  alt={work.title}
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
                  Купить
                </button> */}
              </div>
            </div>
          ))}
        </div>
        {/* <div className={styles.viewMore}>
          <a href="/shop" className={styles.viewMoreButton}>
            Смотреть все работы
            <span className={styles.arrow}>→</span>
          </a>
        </div> */}
      </div>
    </section>
  );
} 