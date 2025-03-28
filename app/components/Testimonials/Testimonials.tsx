'use client';

import { useState } from 'react';
import styles from './Testimonials.module.css';

interface Testimonial {
  id: number;
  text: string;
  author: string;
  role: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Работы Анны обладают уникальной способностью передавать эмоции и создавать особую атмосферу. Каждая картина - это отдельная история, которая находит отклик в душе зрителя.",
    author: "Мария Петрова",
    role: "Куратор галереи современного искусства",
    image: "/testimonials/1.webp"
  },
  {
    id: 2,
    text: "Анна создает не просто картины, а целые миры. Ее техника и внимание к деталям поражают, а цветовая палитра всегда точно передает настроение произведения.",
    author: "Алексей Смирнов",
    role: "Коллекционер",
    image: "/testimonials/2.webp"
  },
  {
    id: 3,
    text: "В работах Анны удивительным образом сочетаются традиционные техники и современное видение. Это делает каждую картину уникальной и запоминающейся.",
    author: "Елена Иванова",
    role: "Искусствовед",
    image: "/testimonials/3.webp"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentTestimonial = testimonials[currentIndex];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <h2 className={styles.title}>Отзывы</h2>
        <div className={styles.content}>
          <div className={styles.testimonial}>
            <div className={styles.imageWrapper}>
              <img 
                src={currentTestimonial.image} 
                alt={currentTestimonial.author}
                className={styles.image}
              />
            </div>
            <div className={styles.text}>
              <p className={styles.quote}>{currentTestimonial.text}</p>
              <div className={styles.author}>
                <h3 className={styles.authorName}>{currentTestimonial.author}</h3>
                <p className={styles.authorRole}>{currentTestimonial.role}</p>
              </div>
            </div>
          </div>
          <div className={styles.controls}>
            <button 
              className={styles.controlButton} 
              onClick={prevTestimonial}
              aria-label="Предыдущий отзыв"
            >
              ←
            </button>
            <button 
              className={styles.controlButton} 
              onClick={nextTestimonial}
              aria-label="Следующий отзыв"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 