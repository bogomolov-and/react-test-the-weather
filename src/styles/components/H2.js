import { createUseStyles } from 'react-jss';

import { getSheetIndex } from 'helpers';

const options = {
  name: 'H2',
  index: getSheetIndex('component'),
};

export const h2Styles = {
  root: {
    fontSize: '3rem',
    fontWeight: 'normal',
    margin: '2rem 0 3rem',
  },
};

export default createUseStyles(h2Styles, options);
