import React from 'react';
import './Todo.css';

interface MyProps {
    id: number,
    title: string,
    isCompleted: boolean,
    onChangeStatusClick(id: number): void,
    onDeleteTodoClick(id: number): void
}

const Todo: React.FunctionComponent<MyProps> = (props) => (
        <div className="task">
            <button className="task__status" onClick={() => props.onChangeStatusClick(props.id)}>{props.isCompleted ? 'Done' : 'In progress'}</button>
            <p className="task__title">{props.title}</p>
            <button className="task__delete" onClick={() => props.onDeleteTodoClick(props.id)}>Delete</button>
        </div>
);

export default Todo;
