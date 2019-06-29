import React from 'react';
import { func, object } from 'prop-types';
import moment from 'moment';

// hooks
import useStyles from 'styles/components/WeatherItem';

const WeatherItem = ({ data, onClick }) => {
  const classes = useStyles();

  return (
    <div
      className={classes.root}
      onClick={onClick}
    >
      <div>
        <div>{data.day}</div>
        <div>{moment(data.date * 1000).format('DD MMM')}</div>
      </div>
      <div className={classes.imageWrap}>
        <img src={`https://s.yimg.com/zz/combo?a/i/us/nws/weather/gr/${data.code}d.png`} alt={data.text} />
      </div>
      <div>{data.text}</div>
      <div>{`${data.high}°/${data.low}°`}</div>
    </div>
  );
};

WeatherItem.displayName = 'WeatherItem';

WeatherItem.propTypes = {
  data: object,
  onClick: func,
};

export default WeatherItem;
