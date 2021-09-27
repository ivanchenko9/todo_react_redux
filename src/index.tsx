import React from 'react';
import { render } from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
import App from './Components/App';
// import store from './redux/reduxStore';

// render(
//   <BrowserRouter>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </BrowserRouter>,
//   document.getElementById('root'),
// );

render(<App />, document.getElementById('root'));
