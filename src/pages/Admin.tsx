import { useState } from 'react';
import { Link } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Home, Users, DollarSign, Calendar, Image as ImageIcon } from 'lucide-react';
import styles from './Admin.module.css';

const data = [
  { name: 'Mon', revenue: 4000 },
  { name: 'Tue', revenue: 3000 },
  { name: 'Wed', revenue: 5000 },
  { name: 'Thu', revenue: 4500 },
  { name: 'Fri', revenue: 7000 },
  { name: 'Sat', revenue: 9000 },
  { name: 'Sun', revenue: 8500 },
];

export default function Admin() {
  const [activeTab, setActiveTab] = useState('Overview');

  return (
    <div className={styles.adminLayout}>
      <aside className={styles.sidebar}>
        <div className={styles.logo}>Dip N Bite Admin</div>
        <nav className={styles.nav}>
          <button className={activeTab === 'Overview' ? styles.active : ''} onClick={() => setActiveTab('Overview')}>
            <Home size={20} /> Overview
          </button>
          <button className={activeTab === 'Menu' ? styles.active : ''} onClick={() => setActiveTab('Menu')}>
            <Home size={20} /> Manage Menu
          </button>
          <button className={activeTab === 'Reservations' ? styles.active : ''} onClick={() => setActiveTab('Reservations')}>
            <Calendar size={20} /> Reservations
          </button>
          <button className={activeTab === 'Gallery' ? styles.active : ''} onClick={() => setActiveTab('Gallery')}>
            <ImageIcon size={20} /> Gallery
          </button>
        </nav>
        <Link to="/" className={styles.backBtn}>Back to Website</Link>
      </aside>

      <main className={styles.mainContent}>
        <header className={styles.header}>
          <h2>{activeTab}</h2>
          <div className={styles.userProfile}>Admin User</div>
        </header>

        {activeTab === 'Overview' && (
          <div className={styles.overview}>
            <div className={styles.statsGrid}>
              <div className={`${styles.statCard} glass`}>
                <DollarSign size={24} className={styles.icon} />
                <div>
                  <p>Total Revenue</p>
                  <h3>$41,000</h3>
                </div>
              </div>
              <div className={`${styles.statCard} glass`}>
                <Users size={24} className={styles.icon} />
                <div>
                  <p>Total Customers</p>
                  <h3>1,250</h3>
                </div>
              </div>
              <div className={`${styles.statCard} glass`}>
                <Calendar size={24} className={styles.icon} />
                <div>
                  <p>Reservations Today</p>
                  <h3>24</h3>
                </div>
              </div>
            </div>

            <div className={`${styles.chartContainer} glass`}>
              <h3>Revenue Analytics</h3>
              <div style={{ width: '100%', height: 300, marginTop: '20px' }}>
                <ResponsiveContainer>
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="name" stroke="#F8F5F0" />
                    <YAxis stroke="#F8F5F0" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '8px' }}
                    />
                    <Line type="monotone" dataKey="revenue" stroke="#C8A165" strokeWidth={3} dot={{ r: 6, fill: '#C8A165' }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {activeTab !== 'Overview' && (
          <div className={`${styles.placeholder} glass`}>
            <h3>{activeTab} Management</h3>
            <p>This module is available in the full CMS version.</p>
          </div>
        )}
      </main>
    </div>
  );
}
