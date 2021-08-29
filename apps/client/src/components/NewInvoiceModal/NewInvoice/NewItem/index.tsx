import React, { useState } from 'react';

function NewItem() {
  const [newItem, setNewItem] = useState<
    | {
        name: string;
        quantity: number;
        price: number;
      }
    | Record<string, unknown>
  >({});

  return <div></div>;
}

export default NewItem;
