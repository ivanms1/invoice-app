import React, { Fragment } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';

import NewItem from './NewItem';

import styles from './NewInvoice.module.scss';

export type Item = {
  name: string;
  price: string;
  quantity: string;
};

type FormValues = {
  items: Item[];
  discount: number;
  tax: number;
};

function NewInvoice() {
  const { register, control, handleSubmit, reset, watch } = useForm<FormValues>(
    {
      defaultValues: {
        items: [],
      },
    }
  );
  const { fields, append, remove } = useFieldArray({
    name: 'items',
    control,
  });

  const items = watch('items');

  const taxAndDiscount = watch(['tax', 'discount']);

  const subTotal = items.reduce((a, b) => a + +b.price, 0);

  const taxTotal = (taxAndDiscount[0] * subTotal) / 100;

  const discountTotal = (taxAndDiscount[1] * subTotal) / 100;

  const grandTotal = subTotal + taxTotal - discountTotal;

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
            <span>
              {item.price} <button onClick={() => remove(index)}>remove</button>
            </span>
          </Fragment>
        ))}
      </div>
      <NewItem onAdd={(item) => append(item)} />
      <div className={styles.ExtrasBox}>
        <div className={styles.Extras}>
          <input
            placeholder="Tax"
            className={styles.Input}
            {...register('tax')}
            type="number"
          />
          <input
            placeholder="Discount"
            className={styles.Input}
            {...register('discount')}
            type="number"
          />
        </div>
        <div className={styles.SubTotal}>
          <p>Sub total:</p>
          <p>{subTotal}</p>
        </div>
      </div>
      <div className={styles.Footer}>
        <div className={styles.Section}>
          <div className={styles.FooterItem}>
            <span className={styles.Label}>Tax</span>
            <span className={styles.Value}>{taxAndDiscount[0] || '0.00'}</span>
          </div>
          <div className={styles.FooterItem}>
            <span className={styles.Label}>Discount</span>
            <span>{taxAndDiscount[1] || '0.00'}</span>
          </div>
        </div>
        <div className={styles.Section}>
          <div className={styles.FooterItem}>
            <span className={styles.Label}>Grand Total</span>
            <span className={styles.Value}>{grandTotal || '0.00'}</span>
          </div>
          <button>Save</button>
        </div>
      </div>
    </form>
  );
}

export default NewInvoice;
