import React, { Fragment } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';

import styles from './NewInvoice.module.scss';

type FormValues = {
  items: {
    name: string;
    price: number;
    quantity: number;
  }[];
};

function NewInvoice() {
  const { register, control, handleSubmit, reset, watch } = useForm<FormValues>(
    {
      defaultValues: {
        items: [],
      },
    }
  );
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      name: 'items',
      control,
    }
  );
  return (
    <form className={styles.NewInvoice}>
      <p className={styles.Title}>Product Details</p>
      <div className={styles.ItemsTable}>
        <span className={styles.NameHeader}>Item</span>
        <span className={styles.QuantityHeader}>Quantity</span>
        <span className={styles.PriceHeader}>Price</span>
        {fields.map((item, index) => (
          <Fragment key={item.id}>
            <span>{item.name}</span>
            <span>{item.quantity}</span>
            <span>{item.price}</span>
          </Fragment>
        ))}
      </div>
    </form>
  );
}

export default NewInvoice;
