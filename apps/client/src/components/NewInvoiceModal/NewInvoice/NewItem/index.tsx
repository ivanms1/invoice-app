import React, { useState } from 'react';

import { Item } from '..';

import styles from './NewItem.module.scss';

interface NewItem {
  onAdd: (item: Item) => void;
}

function NewItem({ onAdd }: NewItem) {
  const [newItem, setNewItem] = useState<Item>({
    name: '',
    quantity: '',
    price: '',
  });

  const handleAdd = () => {
    if (newItem.name && newItem.price && newItem.quantity) {
      onAdd(newItem);
      setNewItem({
        name: '',
        quantity: '',
        price: '',
      });
    }
  };

  return (
    <div className={styles.NewItem}>
      <input
        value={newItem.name}
        className={styles.NameInput}
        onChange={(e) => setNewItem({ ...newItem, name: e?.target?.value })}
        type="text"
      />
      <input
        value={newItem.quantity}
        className={styles.Input}
        onChange={(e) => setNewItem({ ...newItem, quantity: e?.target?.value })}
        type="number"
      />
      <input
        value={newItem.price}
        className={styles.Input}
        onChange={(e) => setNewItem({ ...newItem, price: e?.target?.value })}
        type="number"
      />
      <button type="button" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
}

export default NewItem;
