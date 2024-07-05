import Link from 'next/link';
import styles from './header.module.css';

const Header: React.FC = () => {
  return (
    <>
      <header className={styles.header__container}>
        <span>
          <Link href="/">Portafolio</Link>
        </span>
        <nav className={styles['header--nav__container']}>
          <ul className={`${styles['menu--header']}`}>
            <li className={styles['menu__link--header']}>
              <Link href="/foto">Foto</Link>
            </li>
            <li className={styles['menu__link--header']}>
              <Link href="/sobreMi">SobreMi</Link>
            </li>
            <li className={styles['menu__link--header']}>
              <Link href="/intereses">Intereses</Link>
            </li>
            <li className={styles['menu__link--header']}>
              <Link href="/formulario">Formulario</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export { Header };
