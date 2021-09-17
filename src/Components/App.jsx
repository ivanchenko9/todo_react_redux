import React from 'react'
import './App.css'
import Header from './Header/Header.jsx'
import Content from './Content/Content.jsx'

const App = () => {
    return(
        <div className="container">
           <Header/>
           <Content/>
        </div>
    )
}

export default App