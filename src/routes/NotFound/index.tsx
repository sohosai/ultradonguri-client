import type { FC } from 'react';
import styles from './index.module.css';

const NotFound: FC = () => {
  return (
    <>
      <h1 className={styles.title}>-404- Page Not Found</h1>
    </>
  );
};

export default NotFound;
