'use client';

import { useEffect, useState } from 'react';
import styles from './dashboard.module.scss';
import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';
import StatCard from '@/components/StatCard';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeFilterIndex, setActiveFilterIndex] = useState<number | null>(null);
  const [activeMenuIndex, setActiveMenuIndex] = useState<number | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch('/data.json');
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

  const columns = ['ORGANIZATION', 'USERNAME', 'EMAIL', 'PHONE NUMBER', 'DATE JOINED', 'STATUS'];
  const toggleSidebar = () => setSidebarOpen(prev => !prev);

  return (
    <div className={styles.dashboardLayout}>
      <Topbar onToggleSidebar={toggleSidebar} />
       {sidebarOpen && (
      <div className={styles.overlay} onClick={() => setSidebarOpen(false)} />
    )}
      <div className={styles.dashboardBody}>
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
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
                  {columns.map((col, index) => (
                    <th key={index}>
                      {col}
                      <Image
                        src="/icons/filter-results-button.svg"
                        alt="Filter"
                        width={12}
                        height={12}
                        className={styles.filterIcon}
                        onClick={() =>
                          setActiveFilterIndex(activeFilterIndex === index ? null : index)
                        }
                      />
                      {activeFilterIndex === index && (
                        <div className={styles.filterDropdown}>
                          <form>
                            <label>
                              Organization
                              <select>
                                <option>Select</option>
                              </select>
                            </label>
                            <label>
                              Username
                              <input type="text" placeholder="User" />
                            </label>
                            <label>
                              Email
                              <input type="email" placeholder="Email" />
                            </label>
                            <label>
                              Date
                              <div className={styles.dateInput}>
                                <input type="date" />
                              </div>
                            </label>
                            <label>
                              Phone Number
                              <input type="text" placeholder="Phone Number" />
                            </label>
                            <label>
                              Status
                              <select>
                                <option>Select</option>
                              </select>
                            </label>
                            <div className={styles.filterActions}>
                              <button type="button" className={styles.resetBtn}>
                                Reset
                              </button>
                              <button type="submit" className={styles.filterBtn}>
                                Filter
                              </button>
                            </div>
                          </form>
                        </div>
                      )}
                    </th>
                  ))}
                  <th></th>
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
                    <td className={styles.actionCell}>
                      <Image
                        src="/icons/dot.svg"
                        alt="Action"
                        width={20}
                        height={20}
                        className={styles.actionIcon}
                        onClick={() =>
                          setActiveMenuIndex(activeMenuIndex === i ? null : i)
                        }
                      />
                      {activeMenuIndex === i && (
                        <div className={styles.dropdownMenu}>
                          <div><Image src="/icons/eye.svg" alt="view" width={16} height={16} /> View Details</div>
                          <div><Image src="/icons/karma.svg" alt="blacklist" width={16} height={16} /> Blacklist User</div>
                          <div><Image src="/icons/whitelist.svg" alt="activate" width={16} height={16} /> Activate User</div>
                        </div>
                      )}
                    </td>
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
