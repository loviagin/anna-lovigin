'use client';

import React from 'react';
import Image from 'next/image';
import styles from '../gallery.module.css';
import Modal from './Modal/Modal';
import { GalleryItem } from '../types';

const categories = [
  { id: 'all', name: 'все' },
  { id: 'landscape', name: 'пейзаж' },
  { id: 'city', name: 'городской' },
  { id: 'portrait', name: 'портрет' },
  { id: 'still-life', name: 'натюрморт' },
  { id: 'abstract', name: 'абстракция' },
];

export default function GalleryContent({ galleryItems }: { galleryItems: GalleryItem[] }) {
  const [selectedCategory, setSelectedCategory] = React.useState('all');
  const [selectedItem, setSelectedItem] = React.useState<GalleryItem | null>(null);

  const filteredItems = galleryItems.filter(
    item => selectedCategory === 'all' || item.category === selectedCategory
  );

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Галерея работ</h1>
      
      <div className={styles.filters}>
        {categories.map(category => (
          <button
            key={category.id}
            className={`${styles.filterButton} ${
              selectedCategory === category.id ? styles.filterButtonActive : ''
            }`}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className={styles.galleryGrid}>
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className={styles.galleryItem}
            onClick={() => setSelectedItem(item)}
          >
            <div className={styles.imageWrapper}>
              <Image
                src={item.imageUrl}
                alt={item.title}
                className={styles.image}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={item.id === "1"}
              />
              <div className={styles.imageInfo}>
                <h3 className={styles.imageTitle}>{item.title}</h3>
                <p className={styles.imageDescription}>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedItem && (
        <Modal
          isOpen={!!selectedItem}
          onClose={() => setSelectedItem(null)}
          imageUrl={selectedItem.imageUrl}
          title={selectedItem.title}
          description={selectedItem.description}
          details={selectedItem.details}
        />
      )}
    </main>
  );
} 