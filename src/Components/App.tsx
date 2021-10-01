import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import jwtDecode from 'jwt-decode';
import { setCurrentUser } from '../redux/reducers/authReducer';
import todosAPI, { setAuthToken } from '../api/api';
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
      setAuthToken(access_token);
      const decoded = jwtDecode(access_token);
      dispatch(setCurrentUser(decoded));
      const currentTime = Date.now() / 1000;
      if (decoded.exp < currentTime) {
        todosAPI.logout();
        dispatch(setCurrentUser({}));
      }
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
