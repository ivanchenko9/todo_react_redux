import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './Components/App.jsx'
import './index.css'

render(
    //<BrowserRouter>
        //<Provider>
            <App/>
       // </Provider>
    //</BrowserRouter>
, document.getElementById('root'))