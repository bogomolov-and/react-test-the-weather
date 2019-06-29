import { createUseStyles } from 'react-jss';

import { getSheetIndex } from 'helpers';

const options = {
  name: 'WeatherItem',
  index: getSheetIndex('component'),
};

export const weatherItemStyles = {
  root: {
    display: 'grid',
    gridTemplateColumns: '1fr 170px 2fr 1fr',
    gridGap: '16px',
    alignItems: 'center',
    padding: '16px',
    border: '1px solid #909090',
    margin: '16px 0',
    borderRadius: '8px',
    cursor: 'pointer',
    '& > *': {
      justifySelf: 'center',
    },
  },
  imageWrap: {
    position: 'relative',
    height: '135px',
    width: '170px',
    '& img': {
      position: 'absolute',
      top: '-10px',
      left: 0,
    },
  },
};

export default createUseStyles(weatherItemStyles, options);
