import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentUserFromLSAC } from '../redux/reducers/authReducer';
import Nav from './Nav';
import Header from './Header';
import Content from './Content';
import useStyles from '../styles';

const App: React.FunctionComponent = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.access_token) {
      const { access_token } = localStorage;
      // if (access_token.expIn < Date.now()) {
      //   localStorage.removeItem('access_token');
      //   return;
      // }
      dispatch(setCurrentUserFromLSAC(access_token));
    }
  }, []);
  return (
    <div className={classes.container}>
      <Nav />
      <Header />
      <Content />
    </div>
  );
};

export default App;
