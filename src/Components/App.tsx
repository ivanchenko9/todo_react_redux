import React from 'react';
import './App';
import Header from './Header/Header';
import Content from './Content/Content';

const App: React.FunctionComponent = () => (
  <div className="container">
    <Header />
    <Content />
  </div>
);

export default App;
