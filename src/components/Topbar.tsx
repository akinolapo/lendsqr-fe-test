'use client';

import Image from 'next/image';
import styles from './Topbar.module.scss';
import { Menu } from 'lucide-react';

interface TopbarProps {
  onToggleSidebar: () => void;
}

export default function Topbar({ onToggleSidebar }: TopbarProps) {
  return (
    <div className={styles.topbar}>
      {/* Hamburger only on mobile */}
      <div className={styles.mobileMenu} onClick={onToggleSidebar}>
        <Menu size={24} />
        <Image src="/logo.svg" alt="Lendsqr Logo" width={140} height={30} />
      </div>

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
          <Image
            src="/images/profile.png"
            alt="Avatar"
            width={32}
            height={32}
            className={styles.profileImage}
          />
          <span>Adedeji</span>
        </div>
      </div>
    </div>
  );
}
