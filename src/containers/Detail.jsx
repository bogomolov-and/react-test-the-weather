import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';

// components
import H2 from 'components/H2';
import WeatherItem from 'components/WeatherItem';

// helpers
import { getProp } from 'helpers';

const Detail = () => {
  const params = useParams();
  const weather = useSelector(state => state.weather);
  const dataId = +params.id;
  const { forecasts = [] } = weather;
  const data = forecasts.find(item => item.date === dataId) || {};
  const locationCity = getProp(weather, ['location', 'city'], '');
  const locationCountry = getProp(weather, ['location', 'country'], '');

  if (JSON.stringify(data) === '{}') {
    return (<Redirect to="404" />);
  }

  return (
    <div className="container">
      <H2>{`${locationCity} - ${locationCountry}`}</H2>
      <WeatherItem data={data} />
    </div>
  );
};

Detail.displayName = 'Detail';

export default Detail;
