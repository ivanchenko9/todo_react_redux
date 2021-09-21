import React from 'react';
import { connect } from 'react-redux';
import TodosCreator from './TodosCreator.tsx';
import { createTaskAC, setTodosAll, setIsConfirmedAll } from '../../../../redux/reducers/todoReducer.ts';
import todosAPI from '../../../../api/api.ts';

interface MyProps {
  todosAll: any[],
  setTodosAll(newArray: any[]): void,
  setIsConfirmedAll(isConfirmedAll: boolean): void,
  createTaskAC(newTask: any): void
}

interface MyState {
  inputValue: string,
  isConfirmedAll: boolean
}

class TodosCreatorContainer extends React.Component<MyProps, MyState> {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      isConfirmedAll: false,
    };
  }

  onConfirmAllClick = () => {
    todosAPI.completeAll(!this.state.isConfirmedAll);
    let newArray;
    if (this.state.isConfirmedAll) {
      newArray = this.props.todosAll.map((todo) => ({
        ...todo,
        isCompleted: false,
      }));
    } else {
      newArray = this.props.todosAll.map((todo) => ({
        ...todo,
        isCompleted: true,
      }));
    }
    this.setState((prev) => ({ ...prev, ...{ isConfirmedAll: !this.state.isConfirmedAll } }));
    this.props.setTodosAll(newArray);
    this.props.setIsConfirmedAll(this.state.isConfirmedAll);
  }

  onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState((prev) => ({ ...prev, ...{ inputValue: event.target.value } }));
  }

  onAddTaskClick = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      if (this.state.inputValue !== '') {
        this.props.createTaskAC(this.state.inputValue);
        this.setState((prev) => ({ ...prev, ...{ inputValue: '' } }));
      }
    }
  }

  render() {
    return (
        <TodosCreator onChangeInput={this.onChangeInput} onAddTaskClick={this.onAddTaskClick} inputValue={this.state.inputValue} onConfirmAllClick={this.onConfirmAllClick}/>
    );
  }
}

const mapStateToProps = (state) => ({
  todosAll: state.todoReducer.todosAll,
});

const mapDispatchToProps = {
  createTaskAC,
  setTodosAll,
  setIsConfirmedAll,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodosCreatorContainer);
