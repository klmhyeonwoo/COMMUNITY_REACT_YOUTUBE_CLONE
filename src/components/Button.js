import styles from './Button.module.css';
import like from './like.png';

function Button({value, onClick}) {
  return (
    <div>
    {value ? <button type="image" className={styles.btn}> <img src = {like} className={styles.false} onClick={onClick}/> </button> :
                  <button type="image" className={styles.btn}> <img src = {like} className={styles.true} onClick={onClick}/> </button>}

    {value === false && <p className={styles.message}>좋아요가 비활성화되었습니다 ;-)</p>}
    {value === true && <p className={styles.message}>좋아요가 활성화되었습니다 ;-)</p>}
    </div>
    );
}

export default Button;
