import React from 'react';
import './Header';
import useStyles from '../../styles';

const Header: React.FunctionComponent = () => {
  const classes = useStyles();
  return (
    <header className={classes.main__title}>
      <h1>todos</h1>
    </header>
  );
};

export default Header;
