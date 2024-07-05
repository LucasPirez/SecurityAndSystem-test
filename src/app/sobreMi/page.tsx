import { About } from '@/components/about/About';
import styles from '../page.module.css';

export default function Page() {
  return (
    <main className={styles.main}>
      <section>
        <h2>Sobre Mi</h2>
        <About />
      </section>
    </main>
  );
}
