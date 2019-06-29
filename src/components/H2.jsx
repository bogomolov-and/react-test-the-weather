import React from 'react';
import { any } from 'prop-types';

// hooks
import useStyles from 'styles/components/H2';

const H2 = ({ children }) => {
  const classes = useStyles();

  return (
    <h2 className={classes.root}>{children}</h2>
  );
};

H2.displayName = 'H2';

H2.propTypes = {
  children: any,
};

export default H2;
