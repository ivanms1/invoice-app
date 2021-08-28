import styles from './Invoice.module.scss';
import ItemsTable from './ItemsTable';
import TotalBox from './TotalBox';

const items = [
  { name: 'some items', quantity: 3, price: 800 },
  { name: 'some 234', quantity: 4, price: 300 },
  { name: 'some 23fg4', quantity: 1, price: 700 },
];

const tax = 12.36;

const discount = 10;

function Invoice() {
  const total = items.reduce((a, b) => a + b?.price * b.quantity, 0);

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
            <button className={styles.PrintButton}>
              Print{' '}
              <img
                className={styles.Printer}
                alt="print"
                src="../../assets/printer-blue@2x.png"
              />
            </button>
          </div>
        </div>
        <ItemsTable items={items} />
        <TotalBox total={total} tax={tax} discount={discount} />
      </div>
    </div>
  );
}

export default Invoice;
