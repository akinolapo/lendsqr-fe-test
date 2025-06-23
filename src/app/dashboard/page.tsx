import styles from './dashboard.module.scss';
import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';
import StatCard from '@/components/StatCard';

export default function DashboardPage() {
  return (
    <div className={styles.dashboardContainer}>
      <Sidebar />
      <div className={styles.mainContent}>
        <Topbar />
        <div className={styles.cardsContainer}>
          <StatCard title="Users" value="2,453" icon="/icons/user.svg" />
          <StatCard title="Active Users" value="1,210" icon="/icons/active-user.svg" />
          <StatCard title="Loans" value="12,453" icon="/icons/loans.svg" />
          <StatCard title="Savings" value="102,430" icon="/icons/savings.svg" />
        </div>
      </div>
    </div>
  );
}
