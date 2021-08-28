import styles from './ItemsTable.module.scss';

interface ItemsTable {
  items: {
    name: string;
    quantity: number;
    price: number;
  }[];
}

function ItemsTable({ items }: ItemsTable) {
  return (
    <div className={styles.Table}>
      <div className={styles.TableContainer}>
        <span className={styles.NameHeader}>Item</span>
        <span className={styles.QuantityHeader}>Quantity</span>
        <span className={styles.PriceHeader}>Price</span>
        {items.map((item) => (
          <>
            <div className={styles.ItemName}>
              <span>{item.name}</span>
            </div>
            <div className={styles.ItemQuantity}>
              <span>{item.quantity}</span>
            </div>
            <div className={styles.ItemPrice}>
              <span>{item.price}</span>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default ItemsTable;
