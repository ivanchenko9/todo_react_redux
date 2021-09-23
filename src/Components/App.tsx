import React from 'react';
import { Link } from 'react-router-dom';
import './App';
import { Button, ButtonGroup } from '@mui/material';
import Header from './Header/Header';
import Content from './Content/Content';
import useStyles from '../styles';

const App: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.nav}>
        <div></div>
        <div>
          <ButtonGroup variant="text" aria-label="text button group">
            <Button disabled={false} size="small">
              <Link to="/todos">Todo</Link>
            </Button>
            <Button size="small">
              <Link to="/registration">Registration</Link>
            </Button>
            <Button size="small">
              <Link to="/auth">Auth</Link>
            </Button>
          </ButtonGroup>
        </div>
      </div>
      <Header />
      <Content />
    </div>
  );
};

export default App;
