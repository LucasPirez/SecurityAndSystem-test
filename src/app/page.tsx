import styles from './page.module.css';
import { Form } from '../components/form/Form';
import { About } from '@/components/about/About';
import { Interests } from '@/components/Interests/Interests';
import { Profile } from '@/components/profile/Profile';

export default function Home() {
  return (
    <main className={styles.main}>
      <Profile />
      <About />
      <Interests />
      <Form />
    </main>
  );
}
