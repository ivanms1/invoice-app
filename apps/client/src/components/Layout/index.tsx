import React from 'react';

import Navbar from './Navbar';
import Sidebar from './Sidebar';

import styles from './Layout.module.scss';

interface Layout {
  children: React.ReactNode;
}

function Layout({ children }: Layout) {
  return (
    <div className={styles.Layout}>
      <Navbar />
      <div className={styles.Container}>
        <Sidebar />
        {children}
      </div>
    </div>
  );
}

export default Layout;
