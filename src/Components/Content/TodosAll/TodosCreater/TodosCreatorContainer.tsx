import React from 'react';
import { connect } from 'react-redux';
import TodosCreator from './TodosCreator.tsx';
import { createTaskAC, setTodosAll, setIsConfirmedAll } from '../../../../redux/reducers/todoReducer.ts';

class TodosCreatorContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      isConfirmedAll: false,
    };
  }

  onConfirmAllClick = () => {
    let newArray;
    if (this.state.isConfirmedAll) {
      newArray = this.props.todosData.todosAll.map((todo) => ({
        ...todo,
        isCompleted: false,
      }));
    } else {
      newArray = this.props.todosData.todosAll.map((todo) => ({
        ...todo,
        isCompleted: true,
      }));
    }
    this.setState((prev) => ({ ...prev, ...{ isConfirmedAll: !this.state.isConfirmedAll } }));
    this.props.setTodosAll(newArray);
    this.props.setIsConfirmedAll(this.state.isConfirmedAll);
  }

  onChangeInput = (event) => {
    this.setState((prev) => ({ ...prev, ...{ inputValue: event.target.value } }));
  }

  onAddTaskClick = (event) => {
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
  todosData: state.todoReducer,
});

const mapDispatchToProps = {
  createTaskAC,
  setTodosAll,
  setIsConfirmedAll,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodosCreatorContainer);
