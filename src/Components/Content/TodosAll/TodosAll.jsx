import React from 'react'
import TodosCreator from './TodosCreater/TodosCreator.jsx'
import TodosContainer from './TodosContainer/TodosContainer.jsx'
import Settings from './Settings/Settings.jsx'

const TodosAll = () => {
    return (
        <>
        <TodosCreator/>
        <TodosContainer/>
        <Settings/>
        </>
    )
}

export default TodosAll