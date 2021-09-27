import React, { useState } from 'react';
import Nav from './Nav';
import Header from './Header';
import Content from './Content';
import useStyles from '../styles';
import store, { StoreStatusContext, StoreContext } from '../protoRedux/store';

const App: React.FunctionComponent = () => {
  const [stateStatus, setStateStatus] = useState<boolean>(false);
  const toggleStatus = () => {
    if (stateStatus === false) {
      setStateStatus(true);
    } else {
      setStateStatus(false);
    }
    console.log('stateStatus is:', stateStatus);
    console.log('State changed. New one is: ', store);
  };
  const classes = useStyles();

  return (
    <StoreStatusContext.Provider value={{ stateStatus, toggleStatus }}>
      <StoreContext.Provider value={store}>
        <div className={classes.container}>
          <Nav />
          <Header />
          <Content />
        </div>
      </StoreContext.Provider>
    </StoreStatusContext.Provider>
  );
};

export default App;
