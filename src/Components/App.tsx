import React from 'react';
import Nav from './Nav';
import Header from './Header';
import Content from './Content';
import useStyles from '../styles';

const App: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Nav />
      <Header />
      <Content />
    </div>
  );
};

export default App;
