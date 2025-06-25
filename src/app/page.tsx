'use client';

import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/logo.svg"
          alt="App Logo"
          width={120}
          height={40}
        />
        <h1 className={styles.title}>Lendsqr Dashboard Assessment</h1>
        <p className={styles.intro}>
          Welcome to the Lendsqr admin panel clone. This assessment demonstrates core dashboard
          features including user management, filtering, and detailed user view — all built to be responsive and modular.
        </p>

        <ul className={styles.links}>
          <li>
            <Link href="/login">User Login Page</Link>
          </li>
          <li>
            <Link href="/dashboard">User Dashboard Page</Link>
          </li>
          <li>
            <Link href="/user">User Details Page</Link>
          </li>
        </ul>

        <div className={styles.note}>
          <p>
            <strong>Note:</strong> The filter functionality and user detail view are implemented directly inside the dashboard page,
            so no separate fourth page was required.
          </p>
          <p>
            Built with <strong>Next.js 14</strong>, <strong>TypeScript</strong>, and <strong>SCSS Modules</strong>.
          </p>
        </div>
      </main>
    </div>
  );
}
