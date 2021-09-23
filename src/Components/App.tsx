import React from 'react';
import './App';
import Header from './Header/Header';
import Content from './Content/Content';
import useStyles from '../styles';
import '../index.css';

const App: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Header />
      <Content />
    </div>
  );
};

export default App;
