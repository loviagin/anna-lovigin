'use client';

import styles from './Contacts.module.css';
import { FaEnvelope, FaPhone, FaTelegram, FaVk, FaWhatsapp } from 'react-icons/fa';
import { useState } from 'react';

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    fetch('/api/send-email', {
      method: 'POST',
      body: JSON.stringify(formData),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }   
        return response.json();
      })
      .then(data => {
        console.log('Email sent successfully:', data);
        alert('Сообщение отправлено успешно!');
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        console.log('Form submitted:', formData);
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте еще раз.');
      });

    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className={styles.contacts} id="contacts">
      <div className={styles.container}>
        <h2 className={styles.title}>Контакты</h2>
        <div className={styles.content}>
          <div className={styles.contactInfo}>
            <a href="mailto:anna@lovigin.com" className={styles.contactItem}>
              <FaEnvelope className={styles.icon} />
              <div className={styles.contactText}>
                <span className={styles.contactLabel}>Email</span>
                <span className={styles.contactValue}>anna@lovigin.com</span>
              </div>
            </a>
            <a href="https://t.me/annalovyagina69" target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
              <FaTelegram className={styles.icon} />
              <div className={styles.contactText}>
                <span className={styles.contactLabel}>Телеграм</span>
                <span className={styles.contactValue}>@annalovyagina69</span>
              </div>
            </a>
            <div className={styles.contactItem}>
              <div className={styles.contactText}>
                <span className={styles.contactLabel}>Соц. сети</span>
                <div className={styles.messengers}>
                  <a 
                    href="https://vk.com/annles" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={styles.messengerLink} 
                    title="Vk"
                  >
                    <FaVk />
                  </a>
                  <a 
                    href="https://t.me/annaloviagina" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={styles.messengerLink} 
                    title="Telegram"
                  >
                    <FaTelegram />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <h3 className={styles.formTitle}>Напишите мне</h3>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>Ваше имя</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>Сообщение</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={styles.textarea}
                required
              />
            </div>
            <button type="submit" className={styles.submitButton}>
              Отправить
            </button>
          </form>
        </div>
      </div>
    </section>
  );
} 