import Hero from './components/Hero/Hero';
import AboutPreview from './components/AboutPreview/AboutPreview';
import FeaturedWorks from './components/FeaturedWorks/FeaturedWorks';
import CallToAction from './components/CallToAction/CallToAction';
import MediaPublications from './components/MediaPublications/MediaPublications';
import Contacts from './components/Contacts/Contacts';
import styles from "./page.module.css";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Anna Loviagina – Professional Artist",
  description: "Professional artist creating art that touches the soul. Her works are distinguished by deep emotional content and unique artistic vision.",
  keywords: ["Anna Loviagina", "artist", "art", "artwork", "art gallery", "artistic life", "artistic career", "artistic school", "artistic school"],
};

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <AboutPreview />
      <FeaturedWorks />
      <CallToAction />
      <MediaPublications />
      <Contacts />
    </main>
  );
}
