import React from 'react';
import './App.css';
import Header from './Header/Header.tsx';
import Content from './Content/Content.tsx';

const App: React.FunctionComponent = ({ store }) => (
        <div className="container">
           <Header/>
           <Content store={store}/>
        </div>
);

export default App;
