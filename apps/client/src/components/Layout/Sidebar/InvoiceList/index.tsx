import React from 'react';
import InvoiceItem from './InvoiceItem';

import styles from './InvoiceList.module.scss';

const invoices = [
  {
    id: 1,
    items: 19,
    customer: 'Inger Frizzell',
    total: 4490,
    createdAt: '2021-04-06T09:46:51Z',
  },
  {
    id: 2,
    items: 18,
    customer: 'Blair Carruth',
    total: 4055,
    createdAt: '2020-01-08T01:21:31Z',
  },
  {
    id: 3,
    items: 14,
    customer: 'Colver Whaites',
    total: 4222,
    createdAt: '2021-07-14T22:53:55Z',
  },
  {
    id: 4,
    items: 11,
    customer: 'Lorain Chrichton',
    total: 1913,
    createdAt: '2020-03-11T23:43:22Z',
  },
  {
    id: 5,
    items: 12,
    customer: 'Dael Peert',
    total: 3815,
    createdAt: '2020-11-05T10:42:03Z',
  },
  {
    id: 6,
    items: 6,
    customer: 'Clo Earl',
    total: 3558,
    createdAt: '2021-03-09T18:41:52Z',
  },
  {
    id: 7,
    items: 8,
    customer: 'Ferdie Stuther',
    total: 3362,
    createdAt: '2020-12-05T01:22:17Z',
  },
  {
    id: 8,
    items: 18,
    customer: 'Angelico Dolley',
    total: 4269,
    createdAt: '2020-07-19T13:11:25Z',
  },
  {
    id: 9,
    items: 9,
    customer: 'Adolph Reany',
    total: 689,
    createdAt: '2021-08-12T18:38:38Z',
  },
  {
    id: 10,
    items: 5,
    customer: 'Amelina Canepe',
    total: 539,
    createdAt: '2021-01-29T01:31:25Z',
  },
];

function InvoiceList() {
  return (
    <div className={styles.InvoceList}>
      <p className={styles.Title}>
        Invoices - <span>{invoices.length}</span>
      </p>
      {invoices.map((invoice) => (
        <InvoiceItem key={invoice.id} invoice={invoice} />
      ))}
    </div>
  );
}

export default InvoiceList;
