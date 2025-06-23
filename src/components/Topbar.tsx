import Image from 'next/image';
import styles from './Topbar.module.scss';

export default function Topbar() {
  return (
    <div className={styles.topbar}>
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
          <span>Adedeji</span>
          <Image src="/icons/profile.svg" alt="Avatar" width={32} height={32} />
        </div>
      </div>
    </div>
  );
}
