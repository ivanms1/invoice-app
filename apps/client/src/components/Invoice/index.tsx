import styles from './Invoice.module.scss';

function Invoice() {
  return (
    <div className={styles.InvoiceContainer}>
      <p className={styles.Title}>Invoice Details</p>
      <div className={styles.Invoice}>
        <div className={styles.Header}>
          <div className={styles.Left}>
            <span className={styles.HeaderTitle}>Invoice</span>
            <span className={styles.InvoiceId}># INV1122</span>
            <span className={styles.InvoiceTime}>11:35 AM - Today</span>
          </div>
          <div className={styles.Right}>
            <div className={styles.CustomerDetails}>
              <span className={styles.CustomerTitle}>Customer Details</span>
              <span className={styles.Name}>John Doe</span>
              <span className={styles.Email}>johndoe@serviceprovider.com</span>
            </div>
            <button className={styles.PrintButton}>Print</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Invoice;
