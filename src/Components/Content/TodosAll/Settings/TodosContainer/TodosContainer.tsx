import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo/Todo.tsx';
import { setTodosAll } from '../../../../../redux/reducers/todoReducer.ts';
import todosAPI from '../../../../../api/api.ts';

interface MyProps {
  todosAll: any[],
  setTodosAll(newArray: any[]): void,
  arrToDisplay: string
}

const TodosContainer: React.FunctionComponent<MyProps> = (props) => {
  const onChangeStatusClick = (todoId: number) => {
    const newArray = props.todosAll.map((todo) => {
      if (todo.id === todoId) {
        todosAPI.updateTodo(todoId, props.todosAll);
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      }
      return { ...todo };
    });
    props.setTodosAll(newArray);
  };

  const onDeleteTodoClick = (todoId: number) => {
    todosAPI.deleteTodo(todoId);
    const newArray = props.todosAll.filter((todo) => todo.id !== todoId);
    props.setTodosAll(newArray);
  };

  const displaySelectedArr = (selectedArray) => {
    let todosToRender = selectedArray;
    todosToRender = todosToRender.map(
      (todo) => <Todo key={todo.id}
                    id={todo.id}
                    title={todo.title}
                    isCompleted={todo.isCompleted}
                    onChangeStatusClick={onChangeStatusClick}
                    onDeleteTodoClick={onDeleteTodoClick}/>,
    );
    return todosToRender;
  };

  const getTodosInProgress = () => {
    const todosInProgress = props.todosAll.filter((todo) => todo.isCompleted === false);
    return todosInProgress;
  };

  const getTodosDone = () => {
    const todosCompleted = props.todosAll.filter((todo) => todo.isCompleted === true);
    return todosCompleted;
  };

  const checkTypeOfArrayToDisplay = () => {
    if (props.arrToDisplay === 'active') {
      return displaySelectedArr(getTodosInProgress());
    }
    if (props.arrToDisplay === 'completed') {
      return displaySelectedArr(getTodosDone());
    }
    return displaySelectedArr(props.todosAll);
  };

  return (
      <>
        {checkTypeOfArrayToDisplay()}
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
