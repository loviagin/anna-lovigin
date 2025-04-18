'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import styles from './Hero.module.css';
import Link from 'next/link';
import Image from 'next/image';

interface Artwork {
  id: number;
  title: string;
  imageUrl: string;
}

const artworks: Artwork[] = [
  { id: 1, title: 'Работа 1', imageUrl: '/artworks/1.webp' },
  { id: 2, title: 'Работа 2', imageUrl: '/artworks/2.webp' },
  { id: 3, title: 'Работа 3', imageUrl: '/artworks/3.webp' },
  { id: 4, title: 'Работа 4', imageUrl: '/artworks/4.webp' },
  { id: 5, title: 'Работа 5', imageUrl: '/artworks/5.webp' },
  { id: 6, title: 'Работа 6', imageUrl: '/artworks/6.webp' },
  { id: 7, title: 'Работа 7', imageUrl: '/artworks/7.webp' },
  { id: 8, title: 'Работа 8', imageUrl: '/artworks/8.webp' },
  { id: 9, title: 'Работа 9', imageUrl: '/artworks/9.webp' },
  { id: 10, title: 'Работа 10', imageUrl: '/artworks/10.webp' },
  { id: 11, title: 'Работа 11', imageUrl: '/artworks/11.webp' },
  { id: 12, title: 'Работа 12', imageUrl: '/artworks/12.webp' },
  { id: 13, title: 'Работа 13', imageUrl: '/artworks/13.webp' },
  { id: 14, title: 'Работа 14', imageUrl: '/artworks/14.webp' },
  { id: 15, title: 'Работа 15', imageUrl: '/artworks/15.webp' },
  { id: 16, title: 'Работа 16', imageUrl: '/artworks/16.webp' },
  { id: 17, title: 'Работа 17', imageUrl: '/artworks/17.webp' },
  { id: 18, title: 'Работа 18', imageUrl: '/artworks/18.webp' },
  { id: 19, title: 'Работа 18', imageUrl: '/artworks/19.webp' },
  { id: 20, title: 'Работа 18', imageUrl: '/artworks/20.webp' },
  { id: 21, title: 'Работа 18', imageUrl: '/artworks/21.webp' },
  { id: 22, title: 'Работа 18', imageUrl: '/artworks/22.webp' },
  { id: 23, title: 'Работа 18', imageUrl: '/artworks/23.webp' },
  { id: 24, title: 'Работа 18', imageUrl: '/artworks/24.webp' },
  { id: 25, title: 'Работа 18', imageUrl: '/artworks/25.webp' },
  { id: 26, title: 'Работа 18', imageUrl: '/artworks/26.webp' },
  { id: 27, title: 'Работа 18', imageUrl: '/artworks/27.webp' },
  { id: 28, title: 'Работа 18', imageUrl: '/artworks/28.webp' },
  { id: 29, title: 'Работа 18', imageUrl: '/artworks/29.webp' },
];

// Дублируем массив для бесконечной прокрутки
const duplicatedArtworks = [...artworks, ...artworks];

const DESKTOP_SLIDE_WIDTH = 250;
const DESKTOP_SLIDE_GAP = 30;
const MOBILE_SLIDE_WIDTH = 200;
const MOBILE_SLIDE_GAP = 20;
const ANIMATION_SPEED = 1;

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragStartPosition, setDragStartPosition] = useState(0);
  const animationRef = useRef<number | null>(null);
  const [isClient, setIsClient] = useState(false);
  const [slideWidth, setSlideWidth] = useState(DESKTOP_SLIDE_WIDTH);
  const [slideGap, setSlideGap] = useState(DESKTOP_SLIDE_GAP);

  useEffect(() => {
    setIsClient(true);
    const handleResize = () => {
      setSlideWidth(window.innerWidth <= 768 ? MOBILE_SLIDE_WIDTH : DESKTOP_SLIDE_WIDTH);
      setSlideGap(window.innerWidth <= 768 ? MOBILE_SLIDE_GAP : DESKTOP_SLIDE_GAP);
    };

    // Устанавливаем начальные значения
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const animate = useCallback(() => {
    if (!isClient) return;
    
    setPosition(prev => {
      const newPosition = prev + ANIMATION_SPEED;
      const maxPosition = (slideWidth + slideGap) * artworks.length;
      if (newPosition >= maxPosition) {
        return 0;
      }
      return newPosition;
    });
    animationRef.current = requestAnimationFrame(animate);
  }, [isClient, slideWidth, slideGap]);

  useEffect(() => {
    if (!isHovered && !isDragging && isClient) {
      animationRef.current = requestAnimationFrame(animate);
    }
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovered, isDragging, animate, isClient]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  };

  const handleMouseLeave = () => {
    if (!isDragging) {
      setIsHovered(false);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setDragStartPosition(position);
  };

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;

    const deltaX = e.clientX - startX;
    let newPosition = dragStartPosition - deltaX;

    // Обеспечиваем бесконечную прокрутку
    const maxPosition = (slideWidth + slideGap) * artworks.length;
    if (newPosition < 0) {
      newPosition = maxPosition + newPosition;
    } else if (newPosition >= maxPosition) {
      newPosition = newPosition - maxPosition;
    }

    setPosition(newPosition);
  }, [isDragging, startX, dragStartPosition, slideWidth, slideGap]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    if (!isHovered) {
      setIsHovered(false);
    }
  }, [isHovered]);

  useEffect(() => {
    // Добавляем обработчики для всего документа, чтобы отслеживать перетаскивание за пределами слайдера
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setDragStartPosition(position);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;

    const deltaX = e.touches[0].clientX - startX;
    let newPosition = dragStartPosition - deltaX;

    const maxPosition = (slideWidth + slideGap) * artworks.length;
    if (newPosition < 0) {
      newPosition = maxPosition + newPosition;
    } else if (newPosition >= maxPosition) {
      newPosition = newPosition - maxPosition;
    }

    setPosition(newPosition);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    if (!isHovered) {
      setIsHovered(false);
    }
  };

  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>Анна Ловягина</h1>
        <p className={styles.slogan}>Профессиональный художник</p>
        <div className={styles.buttons}>
          <Link href={'/#featured'} className={styles.primaryButton}>Смотреть работы</Link>
          <Link href={'/#about'} className={styles.secondaryButton}>Узнать больше</Link>
        </div>
      </div>
      
      <div 
        className={styles.slider} 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div 
          className={`${styles.sliderContainer} ${isDragging ? styles.dragging : ''}`}
          style={{ 
            transform: `translateX(-${position}px)`,
            width: `${(slideWidth + slideGap) * artworks.length}px`
          }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {duplicatedArtworks.map((artwork, index) => (
            <div 
              key={`${artwork.id}-${index}`} 
              className={styles.slide}
              style={{ 
                cursor: isDragging ? 'grabbing' : 'grab',
                width: `${slideWidth}px`,
                marginRight: `${slideGap}px`
              }}
            >
              <Image 
                src={artwork.imageUrl} 
                alt={artwork.title}
                width={slideWidth}
                height={slideWidth * 1.5}
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 