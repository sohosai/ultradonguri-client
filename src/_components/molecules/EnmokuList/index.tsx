import Button from '../../atoms/Button';
import EnmokuItem from '../../atoms/EnmokuItem';
import styles from './style.module.css';

const EnmokuList = () => {
  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.list}>
          <EnmokuItem
            time="10:00"
            title="こんにちは世界"
            onSelected={() => {
              alert();
            }}
          />
          <EnmokuItem
            time="11:00"
            title="Hello World"
            onSelected={() => {
              alert();
            }}
            isSelected
          />
          <EnmokuItem
            time="12:00"
            title="Bonjour le monde"
            onSelected={() => {
              alert();
            }}
          />
        </div>
        <div className={styles.buttons}>
          <Button text="一括時間変更" />
          <Button
            icon={
              <svg viewBox="0 0 32 32" fill="none" className={styles.icon} xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M19.9999 2.66667H7.99992C7.29267 2.66667 6.6144 2.94762 6.1143 3.44772C5.6142 3.94782 5.33325 4.62609 5.33325 5.33334V26.6667C5.33325 27.3739 5.6142 28.0522 6.1143 28.5523C6.6144 29.0524 7.29267 29.3333 7.99992 29.3333H23.9999C24.7072 29.3333 25.3854 29.0524 25.8855 28.5523C26.3856 28.0522 26.6666 27.3739 26.6666 26.6667V9.33334L19.9999 2.66667Z"
                  stroke="currentColor"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18.6667 2.66667V8.00001C18.6667 8.70725 18.9477 9.38553 19.4478 9.88562C19.9479 10.3857 20.6262 10.6667 21.3334 10.6667H26.6667"
                  stroke="currentColor"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16 16V24"
                  stroke="currentColor"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20 20L16 16L12 20"
                  stroke="currentColor"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
          />
        </div>
      </div>
    </>
  );
};

export default EnmokuList;
