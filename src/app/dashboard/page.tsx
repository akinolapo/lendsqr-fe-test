'use client';

import { useEffect, useState } from 'react';
import styles from './dashboard.module.scss';
import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';
import StatCard from '@/components/StatCard';
import { ChevronLeft, ChevronRight, ListFilter } from 'lucide-react';
import Image from 'next/image';

const USERS_PER_PAGE = 10;

type User = {
  organization: string;
  username: string;
  email: string;
  phone_number: string;
  date_joined: string;
  status: string;
};

export default function DashboardPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch('https://api.csvgetter.com/JxqPfahnZmtff7JKAV7z?type=json_records');
      const data = await res.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  const paginatedUsers = users.slice(
    (currentPage - 1) * USERS_PER_PAGE,
    currentPage * USERS_PER_PAGE
  );

  const totalPages = Math.ceil(users.length / USERS_PER_PAGE);

  const getStatusClass = (status: string) => {
    return styles[status.toLowerCase()] || '';
  };

  return (
    <div className={styles.dashboardLayout}>
      <Topbar />
      <div className={styles.dashboardBody}>
        <Sidebar />
        <main className={styles.mainContent}>
          <div className={styles.header}>
            <h2>Users</h2>
          </div>

          <div className={styles.cardsContainer}>
            <StatCard title="USERS" value="2,453" icon="/icons/user.svg" />
            <StatCard title="ACTIVE USERS" value="1,210" icon="/icons/active-user.svg" />
            <StatCard title="USERS WITH LOANS" value="12,453" icon="/icons/loan.svg" />
            <StatCard title="USERS WITH SAVINGS" value="102,430" icon="/icons/saving.svg" />
          </div>

          <div className={styles.userTable}>
            <table>
              <thead>
                <tr>
                  <th>
                    ORGANIZATION <Image src="/icons/filter-results-button.svg"
                      alt="Dropdown"
                      width={12}
                      height={12}
                      className={styles.filterIcon}/>
                  </th>
                  <th>
                    USERNAME <Image src="/icons/filter-results-button.svg"
                      alt="Dropdown"
                      width={12}
                      height={12}
                      className={styles.filterIcon}/>
                  </th>
                  <th>
                    EMAIL <Image src="/icons/filter-results-button.svg"
                      alt="Dropdown"
                      width={12}
                      height={12}
                      className={styles.filterIcon}/>
                  </th>
                  <th>
                    PHONE NUMBER <Image src="/icons/filter-results-button.svg"
                      alt="Dropdown"
                      width={12}
                      height={12}
                      className={styles.filterIcon}/>
                  </th>
                  <th>
                    DATE JOINED <Image src="/icons/filter-results-button.svg"
                      alt="Dropdown"
                      width={12}
                      height={12}
                      className={styles.filterIcon}/>
                  </th>
                  <th>
                    STATUS <Image src="/icons/filter-results-button.svg"
                      alt="Dropdown"
                      width={12}
                      height={12}
                      className={styles.filterIcon}/>
                  </th>
                </tr>
              </thead>
              <tbody>
                {paginatedUsers.map((user, i) => (
                  <tr key={i}>
                    <td>{user.organization}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.phone_number}</td>
                    <td>{user.date_joined}</td>
                    <td>
                      <span className={`${styles.status} ${getStatusClass(user.status)}`}>
                        {user.status}
                      </span>
                    </td>
                    <td><Image src="/icons/dot.svg" alt='action' width={20} height={20}/></td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className={styles.paginationContainer}>
              <div className={styles.showing}>
                Showing&nbsp;
                <select>
                  <option value="10">10</option>
                </select>
                &nbsp;out of {users.length}
              </div>

              <div className={styles.pagination}>
                <button onClick={() => setCurrentPage(p => Math.max(p - 1, 1))} disabled={currentPage === 1}>
                  <ChevronLeft size={16} />
                </button>

                {[...Array(totalPages).keys()].slice(0, 5).map(i => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={currentPage === i + 1 ? styles.activePage : ''}
                  >
                    {i + 1}
                  </button>
                ))}

                <span>...</span>

                <button onClick={() => setCurrentPage(totalPages)}>{totalPages}</button>

                <button
                  onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
                  disabled={currentPage === totalPages}
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
