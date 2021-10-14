import React, { useEffect } from 'react';
import { io } from 'socket.io-client';
import { useDispatch } from 'react-redux';
import { setCurrentUserFromLSAC } from '../redux/reducers/authReducer';
import Nav from './Nav';
import Header from './Header';
import Content from './Content';
import useStyles from '../styles';
import config from '../../config';
import SocketContext from '../socketContext';

const App: React.FunctionComponent = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.access_token) {
      const { access_token } = localStorage;
      dispatch(setCurrentUserFromLSAC(access_token));
    }
  }, []);

  const socket = io(config.url);

  return (
    <SocketContext.Provider value={socket}>
      <div className={classes.container}>
        <Nav />
        <Header />
        <Content />
      </div>
    </SocketContext.Provider>
  );
};

export default App;
