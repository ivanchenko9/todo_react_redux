import React from 'react'

const TodosCreator = () => {
    return(
        <div className="create__task">
            <button className="confirme__all">Confirm all</button>
            <input className="create__task__input" placeholder="What needs to be done?" type="text"></input>
        </div>
    )
}

export default TodosCreator