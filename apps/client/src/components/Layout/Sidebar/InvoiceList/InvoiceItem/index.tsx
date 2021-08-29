import classNames from 'classnames';

import useStore from '../../../../../store';

import styles from './InvoiceItem.module.scss';

interface InvoiceItem {
  invoice: {
    id: number;
    items: number;
    customer: string;
    total: number;
    createdAt: string;
  };
}

function InvoiceItem({ invoice }: InvoiceItem) {
  const currentInvoice = useStore((store) => store.currentInvoice);
  const setCurrentInvoice = useStore((store) => store.setCurrentInvoice);

  const isSelected = currentInvoice.id === invoice.id;
  return (
    <div
      className={classNames(styles.InvoiceItem, {
        [styles.isSelected]: isSelected,
      })}
      onClick={() => setCurrentInvoice(invoice)}
    >
      <div className={styles.Left}>
        <p>INV. # - {invoice.id}</p>
        <p>Items - {invoice.items}</p>
        <p className={styles.Customer}>{invoice.customer}</p>
      </div>
      <div className={styles.Right}>
        <p className={styles.CreatedAt}>
          {new Date(invoice.createdAt).toDateString()}
        </p>
        <p className={styles.Total}>{invoice.total}</p>
      </div>
    </div>
  );
}

export default InvoiceItem;
