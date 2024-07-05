import Image from 'next/image';
import styles from './profile.module.css';

const Profile: React.FC = () => {
  return (
    <div className={styles['contact-info__block']}>
      <Image
        src="/avatar.png"
        alt="profile-photo"
        width={270}
        height={270}
        className={styles['contact-info__avatar']}
      />
      <h2>FirstName, LastName</h2>
    </div>
  );
};

export { Profile };
