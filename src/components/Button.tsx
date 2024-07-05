import styles from './styles-components/button.module.css';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const Button: React.FC<Props> = ({ text, ...rest }) => {
  return (
    <button className={styles.button} {...rest}>
      {text}
    </button>
  );
};

export { Button };
