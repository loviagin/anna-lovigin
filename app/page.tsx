import Hero from './components/Hero/Hero';
import AboutPreview from './components/AboutPreview/AboutPreview';
import FeaturedWorks from './components/FeaturedWorks/FeaturedWorks';
import Testimonials from './components/Testimonials/Testimonials';
import CallToAction from './components/CallToAction/CallToAction';
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <AboutPreview />
      <FeaturedWorks />
      {/* <CallToAction />
      <Testimonials /> */}
    </main>
  );
}
