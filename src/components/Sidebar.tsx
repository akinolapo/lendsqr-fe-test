'use client';

import Image from 'next/image';
import styles from './Sidebar.module.scss';

const menuGroups = [
  {
    section: '',
    items: [
      { label: 'Switch Organization', icon: 'briefcase.svg', dropdown: true },
      { label: 'Dashboard', icon: 'home.svg' },
    ]
  },
   { section: 'CUSTOMERS', items: [
    { label: 'Users', icon: 'users.svg' },
    { label: 'Guarantors', icon: 'guarantors.svg' },
    { label: 'Loans', icon: 'loans.svg' },
    { label: 'Decision Models', icon: 'decision-models.svg' },
    { label: 'Savings', icon: 'savings.svg' },
    { label: 'Loan Requests', icon: 'loan-requests.svg' },
    { label: 'Whitelist', icon: 'whitelist.svg' },
    { label: 'Karma', icon: 'karma.svg' },
  ]},
  { section: 'BUSINESSES', items: [
    { label: 'Organization', icon: 'briefcase.svg' },
    { label: 'Loan Products', icon: 'loan-requests.svg' },
    { label: 'Savings Products', icon: 'savings-products.svg' },
    { label: 'Fees and Charges', icon: 'fees-charges.svg' },
    { label: 'Transactions', icon: 'transactions.svg' },
    { label: 'Services', icon: 'services.svg' },
    { label: 'Service Account', icon: 'service-account.svg' },
    { label: 'Settlements', icon: 'settlements.svg' },
    { label: 'Reports', icon: 'reports.svg' },
  ]},
  { section: 'SETTINGS', items: [
    { label: 'Preferences', icon: 'preferences.svg' },
    { label: 'Fees and Pricing', icon: 'fees-pricing.svg' },
    { label: 'Audit Logs', icon: 'audit-logs.svg' },
  ]}
  // Add more sections here as needed
];

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <Image src="/logo.svg" alt="Lendsqr Logo" width={140} height={30} />
      </div>
      <nav className={styles.nav}>
        <ul>
          {menuGroups.map((group, gIndex) => (
            <div key={gIndex}>
              {group.section && (
                <li className={styles.section}>{group.section}</li>
              )}
              {group.items.map((item, iIndex) => (
                <li
                  key={iIndex}
                  className={
                    item.label === 'Users'
                      ? `${styles.navItem} ${styles.active}`
                      : styles.navItem
                  }
                >
                  <Image
                    src={`/icons/${item.icon}`}
                    alt={item.label}
                    width={16}
                    height={16}
                    className={styles.icon}
                  />
                  <span>{item.label}</span>
                  {item.dropdown && (
                    <Image
                      src="/icons/chevron-down.svg"
                      alt="Dropdown"
                      width={12}
                      height={12}
                      className={styles.dropdown}
                    />
                  )}
                </li>
              ))}
            </div>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
