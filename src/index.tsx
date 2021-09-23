import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './Components/App'
import store from './redux/reduxStore'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
