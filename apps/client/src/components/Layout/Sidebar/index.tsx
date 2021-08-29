import InvoiceList from './InvoiceList';

import styles from './Sidebar.module.scss';

function Sidebar() {
  return (
    <div className={styles.Sidebar}>
      <div className={styles.InputContainer}>
        <img
          className={styles.SearchIcon}
          src="../../../assets/search-icon.png"
          alt="search"
        />
        <input
          className={styles.SearchInput}
          type="text"
          placeholder="Search..."
        />
      </div>
      <InvoiceList />
    </div>
  );
}

export default Sidebar;
