'use client';
import React, { useEffect, useState } from 'react';
import { Input } from '../Input';
import styles from './form.module.css';
import useToast from '../../hooks/useToast';
import { Button } from '../Button';
import { FieldNames, ERROR_DESCRIPTION } from '@/constants';

interface Props {}

interface FormState {
  name: string;
  email: string;
  message: string;
}

const Form: React.FC<Props> = () => {
  const [form, setForm] = useState<FormState>({
    [FieldNames.NAME]: '',
    [FieldNames.EMAIL]: '',
    [FieldNames.MESSAGE]: '',
  });

  const [errors, setErrors] = useState({
    [FieldNames.NAME]: '',
    [FieldNames.EMAIL]: '',
    [FieldNames.MESSAGE]: '',
  });

  const [disabled, setDisabled] = useState(true);

  const { createToast, toast } = useToast();

  useEffect(() => {
    if (
      errors[FieldNames.NAME] !== '' ||
      errors[FieldNames.EMAIL] !== '' ||
      errors[FieldNames.MESSAGE] !== '' ||
      form[FieldNames.NAME] === '' ||
      form[FieldNames.EMAIL] === '' ||
      form[FieldNames.MESSAGE] === ''
    ) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [errors]);

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { value, name } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleBlur(
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { validity, name } = event.target;

    if (validity.valid) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    } else {
      for (const value in ERROR_DESCRIPTION) {
        if (validity[value as keyof ValidityState]) {
          const err = ERROR_DESCRIPTION[value as keyof ValidityState];

          setErrors((prev) => ({ ...prev, [name]: err }));
        }
      }
    }
  }
  function handleFocus(event: React.FocusEvent) {
    console.log(event);
  }
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    addToast('success');
  }

  function addToast(variant: 'success' | 'danger' | 'warning') {
    createToast({
      text: 'Enviado con exito',
      variant,
    });
  }

  return (
    <>
      {toast}

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <label className={styles.label}>
            <span>{errors[FieldNames.NAME]}</span>
          </label>
          <Input
            type="text"
            value={form.name}
            placeholder="Nombre"
            name={FieldNames.NAME}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            minLength={4}
            maxLength={20}
            required
          />
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.label}>
            <span>{errors[FieldNames.EMAIL]}</span>
          </label>
          <Input
            type="email"
            value={form.email}
            placeholder="Email"
            onBlur={handleBlur}
            onFocus={handleFocus}
            onChange={handleChange}
            name={FieldNames.EMAIL}
            required
          />
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.label}>
            <span>{errors[FieldNames.MESSAGE]}</span>
          </label>
          <Input
            type="textarea"
            value={form.message}
            placeholder="Mensaje"
            onBlur={handleBlur}
            onFocus={handleFocus}
            onChange={handleChange}
            name={FieldNames.MESSAGE}
            minLength={5}
            maxLength={250}
            required
          />
        </div>
        <Button text="Enviar" type="submit" disabled={disabled} />
      </form>
    </>
  );
};

export { Form };
