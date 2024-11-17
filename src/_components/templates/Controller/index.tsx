import Enmoku from '../../organisms/Enmoku';
import styles from './style.module.css';

const Controller = () => {
  return (
    <>
      <div className={styles.body}>
        <div className={styles.wrapper}>
          <div>
            <Enmoku />
          </div>
          <div>Right</div>
        </div>
      </div>
    </>
  );
};

export default Controller;
