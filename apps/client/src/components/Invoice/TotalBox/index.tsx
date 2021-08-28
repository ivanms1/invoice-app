import styles from './TotalBox.module.scss';

interface TotalBox {
  total: number;
  tax: number;
  discount: number;
}

function TotalBox({ total, tax, discount }: TotalBox) {
  const taxTotal = (tax * total) / 100;

  const discountTotal = (discount * total) / 100;
  return (
    <div className={styles.TotalSection}>
      <div className={styles.TotalBox}>
        <p className={styles.TotalTitle}>Sub Total</p>
        <p className={styles.Result}>{total}</p>
      </div>
      <div className={styles.TotalBox}>
        <p className={styles.TotalTitle}>Tax ({tax}%)</p>
        <p className={styles.Result}>{taxTotal}</p>
      </div>
      <div className={styles.TotalBox}>
        <p className={styles.TotalTitle}>Discount ({discount}%)</p>
        <p className={styles.Result}>{discountTotal}</p>
      </div>
      <div className={styles.TotalBox}>
        <p className={styles.GrandTitle}>Grand Total</p>
        <p className={styles.GrandTotal}>{total + taxTotal - discountTotal}</p>
      </div>
    </div>
  );
}

export default TotalBox;
