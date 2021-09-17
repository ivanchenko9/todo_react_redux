import React from 'react'
import './Todo.css'

const Todo = () => {
    return(
        <div className="task">
            <button className="task__status">Done</button>
            <p className="task__title">Something</p>
            <button className="task__delete">Delete</button>
        </div>
    )
}

export default Todo