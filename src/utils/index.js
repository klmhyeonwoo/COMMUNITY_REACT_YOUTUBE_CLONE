import moment from 'moment';

function ProcessViewCount(viewCount) {
  if (viewCount < 1000) {
    return `조회수 ${viewCount}회`;
  }
  else if (viewCount < 10000) {
    return `조회수 ${(viewCount / 1000).toFixed(1)}천회`;
  }
  else if (viewCount < 100000) {
    return `조회수 ${(viewCount / 10000).toFixed(1)}만회`;
  }
  else if (viewCount < 100000000) {
    return `조회수 ${(viewCount / 10000).toFixed(0)}만회`;
  }
  else {
    return `조회수 ${(viewCount / 100000000).toFixed(1)}억회`;
  }
  /* toFixed(n)은 n의 수에 따라 정수 값 아래에서 반올림해줌 */
}

function Moment(data) {
  const standard = moment('2021-09-16T13:15:02');
  return moment(data.date).from(standard);
}

export {ProcessViewCount, Moment};
