import styles from './HorizontalCard.module.css'
import moment from 'moment';
import {ProcessViewCount, Moment} from '../../utils';
import default_img from '../../images/default_img.jpg';

// JSX식 표기방법 <a href={`https://www.youtube.com/watch?v=${data.id}`}>
// JSX식 표기방법 <a href={`https://www.youtube.com/channel/${data.channelId}`}

function HorizontalCard({data}) {

  const custom_time = moment("2021-09-16T13:15:02");


  return (
        <a href={'https://www.youtube.com/watch?v=' + data.id}>
        <div className={styles.card}>
        <img src={data.thumbnail} className={styles.thumbnail} alt={data.title + '의 썸네일'} />
        <div className={styles.info}>
          <div className={styles.title}> {data.title} </div>
          <div className={styles.meta}> <a href={'https://www.youtube.com/channel/' + data.channelId} className={styles.uploader}> {data.channelTitle} </a>
          <div className={styles.view}> {ProcessViewCount(data.viewCount)} </div>
          <div className={styles.time}> {Moment(data)} </div>
          </div>
          <div className={styles.desc}>{data.description}</div>
          </div>
        </div>
      </a>
  );
}

export default HorizontalCard;
