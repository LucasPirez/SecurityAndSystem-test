import React, { ReactNode } from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { MdOutlineSmsFailed } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';
import styles from './styles-components/toast.module.css';

type ToastProps = {
  variant?: 'success' | 'danger' | 'warning';
  children: ReactNode;
};
export default function Toast({ variant = 'success', children }: ToastProps) {
  const classVariant =
    variant === 'danger'
      ? styles.containerDanger
      : variant === 'success'
      ? styles.containerSuccess
      : styles.containerWarning;

  return (
    <div className={`${styles.container} ${classVariant}`}>
      {variant === 'success' ? (
        <span>
          <AiOutlineCheckCircle size={25} />
        </span>
      ) : variant === 'warning' ? (
        <span>
          <MdOutlineSmsFailed size={25} />
        </span>
      ) : (
        <span>
          <RxCross2 size={25} />
        </span>
      )}
      <span>{children}</span>
    </div>
  );
}
