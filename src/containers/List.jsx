import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

// actions
import { getWeather } from 'actions';

// components
import H2 from 'components/H2';
import WeatherItem from 'components/WeatherItem';

// helpers
import { getProp } from 'helpers';

// hooks
import useStyles from 'styles/containers/List';

const List = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const weather = useSelector(state => state.weather);
  const locationCity = getProp(weather, ['location', 'city'], '');
  const [city, setCity] = useState(locationCity || 'Minsk');

  useEffect(() => {
    if (!locationCity) {
      dispatch(getWeather({ location: city }));
    }
  }, []);

  const handleSubmit = event => {
    event.preventDefault();

    if (locationCity !== city) {
      dispatch(getWeather({ location: city }));
    }
  };

  const handleChange = event => {
    event.preventDefault();
    setCity(event.target.value);
  };

  const goToDetail = id => () => {
    history.push(`/${id}`);
  };

  const locationCountry = getProp(weather, ['location', 'country'], '');
  const forecasts = getProp(weather, 'forecasts', []);

  return (
    <>
      <div className={classes.header}>
        <div className="container">
          <h1 className={classes.headerTitle}>Find the weather in your city</h1>
          <form className={classes.form} onSubmit={handleSubmit}>
            <input
              className={classes.input}
              type="text"
              placeholder="Enter a city"
              value={city}
              onChange={handleChange}
            />
            <button className={classes.button} type="submit">Search</button>
          </form>
        </div>
      </div>
      <div className="container">
        <H2>{locationCity ? `${locationCity} - ${locationCountry}` : 'This city is not found!'}</H2>
        <div>
          {forecasts.map(item => (
            <WeatherItem
              key={item.date}
              data={item}
              onClick={goToDetail(item.date)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

List.displayName = 'List';

export default List;
