'use client';

import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';
import styles from './user.module.scss';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';

export default function UserDetailsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
   const toggleSidebar = () => setSidebarOpen(prev => !prev);
  return (
    <div className={styles.userDetailsLayout}>
      <Topbar onToggleSidebar={toggleSidebar} />
      <div className={styles.userDetailsBody}>
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <main className={styles.mainContent}>
          <div className={styles.pageHeader}>
            <div className={styles.backLink}>
              <ArrowLeft size={14} />
              <span>Back to Users</span>
            </div>
            <div className={styles.headerRow}>
              <h2>User Details</h2>
              <div className={styles.actions}>
                <button className={styles.blacklist}>Blacklist User</button>
                <button className={styles.activate}>Activate User</button>
              </div>
            </div>
          </div>

          <div className={styles.userCard}>
            <div className={styles.userHeader}>
              <div className={styles.userInfo}>
                <div className={styles.avatar}>
                    <Image src="/icons/avatar.svg" alt="User Avatar" width={40} height={40} />
                </div>
                <div>
                  <h3>Grace Effiom</h3>
                  <p>LSQFf587g90</p>
                </div>
              </div>
              <div className={styles.userTier}>
                <p>User’s Tier</p>
                <div className={styles.stars}>★☆☆</div>
              </div>
              <div className={styles.userBank}>
                <h3>₦200,000.00</h3>
                <p>9912345678/Providus Bank</p>
              </div>
            </div>

            <div className={styles.tabs}>
              <span className={styles.active}>General Details</span>
              <span>Documents</span>
              <span>Bank Details</span>
              <span>Loans</span>
              <span>Savings</span>
              <span>App and System</span>
            </div>
          </div>

          <div className={styles.detailSection}>
            <h4>Personal Information</h4>
            <div className={styles.grid}>
              <div><p>Full Name</p><span>Grace Effiom</span></div>
              <div><p>Phone Number</p><span>07060780922</span></div>
              <div><p>Email Address</p><span>grace@gmail.com</span></div>
              <div><p>BVN</p><span>07060780922</span></div>
              <div><p>Gender</p><span>Female</span></div>
              <div><p>Marital Status</p><span>Single</span></div>
              <div><p>Children</p><span>None</span></div>
              <div><p>Type of Residence</p><span>Parent's Apartment</span></div>
            </div>

            <h4>Education and Employment</h4>
            <div className={styles.grid}>
              <div><p>Level of Education</p><span>B.Sc</span></div>
              <div><p>Employment Status</p><span>Employed</span></div>
              <div><p>Sector of Employment</p><span>FinTech</span></div>
              <div><p>Duration of Employment</p><span>2 years</span></div>
              <div><p>Office Email</p><span>grace@lendsqr.com</span></div>
              <div><p>Monthly Income</p><span>₦200,000.00 - ₦400,000.00</span></div>
              <div><p>Loan Repayment</p><span>40,000</span></div>
            </div>

            <h4>Socials</h4>
            <div className={styles.grid}>
              <div><p>Twitter</p><span>@grace_effiom</span></div>
              <div><p>Facebook</p><span>Grace Effiom</span></div>
              <div><p>Instagram</p><span>@grace_effiom</span></div>
            </div>

            <h4>Guarantor</h4>
            <div className={styles.grid}>
              <div><p>Full Name</p><span>Debby Ogana</span></div>
              <div><p>Phone Number</p><span>07060780922</span></div>
              <div><p>Email Address</p><span>debby@gmail.com</span></div>
              <div><p>Relationship</p><span>Sister</span></div>
              <div><p>Full Name</p><span>Debby Ogana</span></div>
              <div><p>Phone Number</p><span>07060780922</span></div>
              <div><p>Email Address</p><span>debby@gmail.com</span></div>
              <div><p>Relationship</p><span>Sister</span></div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
