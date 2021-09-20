import React from 'react';
import './TodosCreator.css';

const TodosCreator = (props) => (
    <div className="create__task">
    <button className="confirme__all" onClick={props.onConfirmAllClick}>Confirm all</button>
    <input className="create__task__input"
    placeholder="What needs to be done?"
    type="text" value={props.inputValue}
    onChange={(event) => props.onChangeInput(event)}
    onKeyPress={(event) => props.onAddTaskClick(event)}/>
    </div>
);

export default TodosCreator;
