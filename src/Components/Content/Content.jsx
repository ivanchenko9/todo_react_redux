import React from 'react'
import Registration from './Registration/Registration.jsx'
import Auth from './Auth/Auth.jsx'
import TodosAll from './TodosAll/TodosAll.jsx'

const Content = () => {
    return(
        <>
            <Registration/>
            <Auth/>
            <TodosAll/>
        </>
    )
}

export default Content