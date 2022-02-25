import styles from './HomeCard.module.css';
import default_img from '../../images/default_img.jpg';
import { ProcessViewCount, Moment } from '../../utils';
import moment from 'moment';
import 'moment/locale/ko';

function HomeCard(data, index) {

  const custom_time = moment("2021-09-16T13:15:02");

  const onErrorImg = (e) => {
  	e.target.src = default_img;
  }

  return (
    <a
      href={`https://www.youtube.com/watch?v=${data.id}`}
      key={`home-card-${index}`}
      className={styles.card}
    >
      <img
        className={styles.thumbnail}
        src={data.thumbnail}
        alt={`${data.title}의 썸네일`}
      />


      <div className={styles.info}>
        <a href={`https://www.youtube.com/channel/${data.channelId}`}>
            <img
              className={styles.channelImg}
              src={data.channelThumbnail}
              onError={onErrorImg}
              />
        </a>

        <div>
          <div className={styles.title}> {data.title}</div>
          <div className={styles.uploader}>{data.channelTitle}</div>
          <div className={styles.flex}>
            <div className={styles.view}>{ProcessViewCount(data.viewCount)}</div>
            <div className={styles.date}>{Moment(data)}</div>
          </div>
        </div>
      </div>
    </a>
  );
}

export default HomeCard;
