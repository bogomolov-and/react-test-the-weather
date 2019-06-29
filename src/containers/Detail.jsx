import React from 'react';
import { object } from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

// components
import H2 from 'components/H2';
import WeatherItem from 'components/WeatherItem';

// helpers
import { getProp } from 'helpers';

const Detail = ({ weather, match }) => {
  const dataId = +match.params.id;
  const { forecasts = [] } = weather;
  const data = forecasts.find(item => item.date === dataId) || {};
  const locationCity = getProp(weather, ['location', 'city'], '');
  const locationCountry = getProp(weather, ['location', 'country'], '');

  return (
    <div className="container">
      <H2>{`${locationCity} - ${locationCountry}`}</H2>
      <WeatherItem data={data} />
    </div>
  );
};

Detail.displayName = 'Detail';

Detail.propTypes = {
  match: object,
  weather: object,
};

const mapStateToProps = state => ({
  weather: state.weather,
});

export default compose(
  withRouter,
  connect(mapStateToProps)
)(Detail);
