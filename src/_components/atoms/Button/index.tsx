import styles from './style.module.css';

type ButtonProps = {
  text?: string;
  icon?: JSX.Element;
};

const Button = (props: ButtonProps) => {
  return (
    <>
      <button className={styles.button}>
        {props.icon && props.icon}
        {props.text && <div className={styles.text}>{props.text}</div>}
      </button>
    </>
  );
};

export default Button;
