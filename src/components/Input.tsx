import React, { HTMLInputTypeAttribute } from 'react';
import styles from './styles-components/input.module.css';

const TEXTAREA = 'textarea';

interface Props
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  value: string | undefined;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  type: HTMLInputTypeAttribute | typeof TEXTAREA;
  onBlur?: (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onFocus?: (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const Input: React.FC<Props> = ({
  type,
  onChange,
  onBlur,
  onFocus,
  value,
  ...rest
}): JSX.Element => {
  return type === TEXTAREA ? (
    <textarea
      aria-label={rest.name}
      className={styles.textarea}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      value={value}
      {...rest}
    />
  ) : (
    <input
      className={styles.input}
      type={type}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      {...rest}
      aria-label={rest.name}
    />
  );
};

export { Input };
