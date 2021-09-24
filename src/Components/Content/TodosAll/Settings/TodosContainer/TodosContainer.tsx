import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
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

  const whichArrayShouldDisplay = (): ITodos[] => {
    let newArr;
    if (arrToDisplay === 'active') {
      newArr = todosAll.filter((todo: ITodos) => todo.isCompleted === false);
      return newArr;
    }
    if (arrToDisplay === 'completed') {
      newArr = todosAll.filter((todo: ITodos) => todo.isCompleted === true);
      return newArr;
    }
    return todosAll;
  };

  return (
    <>
      {whichArrayShouldDisplay().map((todo: ITodos) => (
        <Todo
          key={todo.id}
          id={todo.id}
          title={todo.title}
          isCompleted={todo.isCompleted}
          onChangeStatusClick={onChangeStatusClick}
          onDeleteTodoClick={onDeleteTodoClick}
        />
      ))}
    </>
  );
};

const mapStateToProps = (state) => ({
  todosAll: state.todoReducer.todosAll,
});

const mapDispatchToProps = {
  setTodosAll,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
