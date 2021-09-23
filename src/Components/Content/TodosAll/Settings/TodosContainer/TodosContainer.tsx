import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo/Todo';
import { setTodosAll } from '../../../../../redux/reducers/todoReducer';
import { ITodos } from '../../../../../redux/types';
import todosAPI from '../../../../../api/api';

interface MyProps {
  todosAll: ITodos[];
  setTodosAll(newArray: ITodos[]): void;
  arrToDisplay: string;
}

const TodosContainer: React.FunctionComponent<MyProps> = ({
  todosAll,
  arrToDisplay,
  setTodosAll,
}) => {
  const onChangeStatusClick = (todoId: number) => {
    const newArray = todosAll.map((todo: ITodos) => {
      if (todo.id === todoId) {
        todosAPI.updateTodo(todoId, todosAll);
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      }
      return { ...todo };
    });
    setTodosAll(newArray);
  };

  const onDeleteTodoClick = (todoId: number) => {
    todosAPI.deleteTodo(todoId);
    const newArray = todosAll.filter((todo: ITodos) => todo.id !== todoId);
    setTodosAll(newArray);
  };

  const displaySelectedArr = (selectedArray: ITodos[]) => {
    let todosToRender: ITodos[] = selectedArray;
    todosToRender = todosToRender.map((todo: ITodos) => (
      <Todo
        key={todo.id}
        id={todo.id}
        title={todo.title}
        isCompleted={todo.isCompleted}
        onChangeStatusClick={onChangeStatusClick}
        onDeleteTodoClick={onDeleteTodoClick}
      />
    ));
    return todosToRender;
  };

  const getTodosInProgress = () => {
    const todosInProgress = todosAll.filter(
      (todo: ITodos) => todo.isCompleted === false,
    );
    return todosInProgress;
  };

  const getTodosDone = () => {
    const todosCompleted = todosAll.filter(
      (todo: ITodos) => todo.isCompleted === true,
    );
    return todosCompleted;
  };

  const checkTypeOfArrayToDisplay = () => {
    if (arrToDisplay === 'active') {
      return displaySelectedArr(getTodosInProgress());
    }
    if (arrToDisplay === 'completed') {
      return displaySelectedArr(getTodosDone());
    }
    return displaySelectedArr(todosAll);
  };

  return <>{checkTypeOfArrayToDisplay()}</>;
};

const mapStateToProps = (state) => ({
  todosAll: state.todoReducer.todosAll,
});

const mapDispatchToProps = {
  setTodosAll,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
