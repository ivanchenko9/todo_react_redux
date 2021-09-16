import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
//import './styles/style.css'

const App = () => {
    return(
        <div >
            <hr/>
            <h1>Hi there!</h1>
            <hr/>
        </div>
    )
}

render(
    //<BrowserRouter>
        //<Provider>
            <App/>
       // </Provider>
    //</BrowserRouter>
, document.getElementById('root'))