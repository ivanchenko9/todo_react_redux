import React from 'react';
import './TodosCreator.css';

interface MyProps {
    onConfirmAllClick(): void,
    onChangeInput(event: React.ChangeEvent<HTMLInputElement>):void,
    onAddTaskClick(event: React.KeyboardEvent): void,
    inputValue: number
}

const TodosCreator: React.FunctionComponent<MyProps> = (props) => (
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
