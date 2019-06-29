import { createUseStyles } from 'react-jss';

import { getSheetIndex } from 'helpers';

const options = {
  name: 'List',
  index: getSheetIndex('container'),
};

export const listStyles = {
  header: {
    display: 'flex',
    background: 'linear-gradient(45deg, #a1c4fd, #c2e9fb)',
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: '6rem',
    fontWeight: 'normal',
    margin: '2.6rem 0 4rem',
  },
  form: {
    '& > *': {
      margin: '0.8rem',
    },
  },
  input: {
    fontSize: '2.6rem',
    width: '45rem',
    padding: '1.2rem',
    border: '1px solid #ffffff',
    borderRadius: '4px',
  },
  button: {
    fontSize: '2.6rem',
    minWidth: '10rem',
    backgroundColor: 'transparent',
    padding: '1.2rem',
    color: '#ffffff',
    border: '1px solid #ffffff',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default createUseStyles(listStyles, options);
