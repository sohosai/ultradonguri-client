import styles from './style.module.css';

type EnmokuItemProps = {
  title: string;
  time: string;
  onSelected: () => void;
  isSelected?: boolean;
};

const EnmokuItem = (props: EnmokuItemProps) => {
  return (
    <>
      <div className={`${styles.wrap} ${props.isSelected && styles.selected}`}>
        <div className={styles.content}>
          <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.icon}>
            <path d="M3 9H15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M3 4.5H15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M3 13.5H15"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <input type="text" defaultValue={props.time} className={styles.input} />
          <div className={styles.title}>{props.title}</div>
        </div>
        <button className={styles.selectBtn} onClick={props.onSelected}>
          <svg
            viewBox="0 0 46 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${styles.icon} ${styles.icon__large}`}
          >
            <path
              d="M17 17L31 26L17 35V17Z"
              fill="currentColor"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default EnmokuItem;
