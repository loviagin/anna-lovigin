import Hero from '../components/Hero/Hero';
import AboutPreview from '../components/AboutPreview/AboutPreview';
import FeaturedWorks from '../components/FeaturedWorks/FeaturedWorks';
import CallToAction from '../components/CallToAction/CallToAction';
import styles from "./page.module.css";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Анна Ловягина – Профессиональный художник",
  description: "Профессиональный художник, создающий искусство, которое трогает душу. Ее работы отличаются глубоким эмоциональным содержанием и уникальным художественным видением.",
  keywords: ["Анна Ловягина", "художник", "искусство", "творчество", "художественная галерея", "художественные работы", "художественная жизнь", "художественная карьера", "художественная школа", "художественная школа"],
};

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <AboutPreview />
      <FeaturedWorks />
      <CallToAction />
    </main>
  );
}
