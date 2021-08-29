import React, { useState } from 'react';
import Modal from 'react-modal';
import CustomerDetails from './CustomerDetails';
import NewInvoice from './NewInvoice';

import styles from './NewInvoiceModal.module.scss';

Modal.setAppElement('#root');

interface ModalProps extends Modal.Props {
  onClose: () => void;
}

function NewInvoiceModal({ isOpen, onClose }: ModalProps) {
  const [editMode, setEditMode] = useState<'invoice' | 'customer'>('invoice');

  const Content = editMode === 'invoice' ? NewInvoice : CustomerDetails;

  return (
    <Modal
      isOpen={isOpen}
      overlayClassName={styles.Overlay}
      bodyOpenClassName={styles.Overlay}
      className={styles.Modal}
      onRequestClose={onClose}
      closeTimeoutMS={300}
    >
      <div className={styles.Content}>
        <div className={styles.Header}>
          <p className={styles.Title}>Create New Invoice</p>
          <p className={styles.Order}>Order No: 1234</p>
        </div>
        <Content />
      </div>
    </Modal>
  );
}

export default NewInvoiceModal;
