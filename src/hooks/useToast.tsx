import React, { useState } from 'react';
import Toast from '../components/Toast';

type Toast = {
  text: string;
  variant?: 'success' | 'danger' | 'warning';
};
export default function useAlert() {
  const [toastState, setToastState] = useState<Toast | null>(null);

  const createToast = (options: Toast): void => {
    setToastState(options);
    setTimeout(() => {
      setToastState(null);
    }, 5000);
  };

  const toast = (
    <>
      {toastState && (
        <Toast variant={toastState?.variant}>{toastState?.text ?? ''}</Toast>
      )}
    </>
  );

  return {
    toast,
    createToast,
  };
}
