import React, { useState } from 'react';

import Navbar from './Navbar';
import Sidebar from './Sidebar';
import NewInvoiceModal from '../NewInvoiceModal';

import styles from './Layout.module.scss';

interface Layout {
  children: React.ReactNode;
}

function Layout({ children }: Layout) {
  const [isInvoiceModalOpen, setisInvoiceModalOpen] = useState(false);
  return (
    <div className={styles.Layout}>
      <Navbar />
      <button
        className={styles.NewInvoiceButton}
        onClick={() => setisInvoiceModalOpen(true)}
      >
        <img src="../../assets/plus-white.png" alt="new invoice" />
      </button>
      <div className={styles.Container}>
        <Sidebar />
        {children}
      </div>
      <NewInvoiceModal
        isOpen={isInvoiceModalOpen}
        onClose={() => setisInvoiceModalOpen(false)}
      />
    </div>
  );
}

export default Layout;
