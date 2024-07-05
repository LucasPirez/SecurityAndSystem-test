import styles from './interests.module.css';

const Interests: React.FC = () => {
  return (
    <section>
      <h3 className={styles.title}>Intereses</h3>
      <ul className={styles.list}>
        <li className="interest__list">Sofware Development</li>
        <li className="interest__list">Find a Job</li>
        <li className="interest__list">Solve Problems</li>
        <li className="interest__list">Search Oportunities</li>
      </ul>
    </section>
  );
};

export { Interests };
