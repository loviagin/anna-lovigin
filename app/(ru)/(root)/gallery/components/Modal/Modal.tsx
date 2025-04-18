import React from 'react';
import Image from 'next/image';
import styles from './Modal.module.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
  description: string;
  details: {
    technique: string;
    year: string;
    size: string;
  };
}

export default function Modal({
  isOpen,
  onClose,
  imageUrl,
  title,
  description,
  details,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className={`${styles.overlay} ${isOpen ? styles.overlayVisible : ''}`}>
      <div className={`${styles.modal} ${isOpen ? styles.modalVisible : ''}`}>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
        <Image
          src={imageUrl}
          alt={title}
          className={styles.modalImage}
          width={1200}
          height={800}
        />
        <div className={styles.modalContent}>
          <h2 className={styles.modalTitle}>{title}</h2>
          <p className={styles.modalDescription}>{description}</p>
          <div className={styles.modalDetails}>
            <span>{details.technique}</span>
            <span>•</span>
            <span>{details.year}</span>
            <span>•</span>
            <span>{details.size}</span>
          </div>
        </div>
      </div>
    </div>
  );
} 