import Image from 'next/image';
import styles from './Topbar.module.scss';

export default function Topbar() {
  return (
    <div className={styles.topbar}>
      <div className={styles.left}>
        <Image src="/logo.svg" alt="Lendsqr Logo" width={140} height={30} />
      </div>

      <div className={styles.search}>
        <input type="text" placeholder="Search for anything" />
        <button>
          <Image src="/icons/search.svg" alt="Search" width={16} height={16} />
        </button>
      </div>

      <div className={styles.profile}>
        <a href="#">Docs</a>
        <Image src="/icons/bell.svg" alt="Notifications" width={20} height={20} />
        <div className={styles.avatar}>
          <Image src="/images/profile.png" alt="Avatar" width={32} height={32} className={styles.profileImage} />
          <span>Adedeji</span>
        </div>
      </div>
    </div>
  );
}
