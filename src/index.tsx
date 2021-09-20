import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './Components/App.tsx';
import store from './redux/reduxStore.ts';
import './index.css';

render(
  // <BrowserRouter>
  <Provider store={store}>
    <App/>
  </Provider>,
  // </BrowserRouter>
  document.getElementById('root'),
);
