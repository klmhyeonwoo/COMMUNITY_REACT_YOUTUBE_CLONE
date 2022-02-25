import HorizontalCard from '../shared/HorizontalCard';
import styles from './SubscriptionCard.module.css';
import default_img from '../../images/default_img.jpg';

function SubscriptionCard({data}) {

  const onErrorImg = (e) => {
    e.target.src = default_img;
  }

  return (
    <div className={styles.card}>
    <a className={styles.uploader} href={`https://www.youtube.com/channel/${data.channelid}`}>
    <img className={styles['channel-image']} src={data.channelThumbnail} onError={onErrorImg}/>
    <div className={styles.name}>{data.channelTitle}</div>
    </a>
    <div className={styles.body}>
    <HorizontalCard data={data} />
    </div>
    </div>
  );
}

export default SubscriptionCard;
