import React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { connect } from 'react-redux';
import { setTodosAll } from '../../../../redux/reducers/todoReducer';
import TodosCreatorContainer from './TodosContainer/TodosContainer';
import './Settings';
import { ITodos } from '../../../../redux/types';
import todosAPI from '../../../../api/api';

interface MyProps {
  todosAll: ITodos[];
  setTodosAll(newArray: ITodos[]): void;
}

interface MyState {
  arrToDisplay: string;
}

class Settings extends React.Component<MyProps, MyState> {
  constructor(props) {
    super(props);
    this.state = {
      arrToDisplay: 'all',
    };
  }

  calcTodoAmount = () => {
    if (this.props.todosAll.length) {
      const todoAmount = this.props.todosAll.reduce((total, curent) => {
        if (!curent.isCompleted) {
          return total + 1;
        }
        return total;
      }, 0);
      return todoAmount;
    }
    return 0;
  };

  onClearCompletedClick = () => {
    todosAPI.clearDone();
    const newArray = this.props.todosAll.filter(
      (todo) => todo.isCompleted !== true,
    );
    this.props.setTodosAll(newArray);
  };

  onChengeStatusAll = () => {
    this.setState((prev) => ({
      ...prev,
      ...{ arrToDisplay: 'all' },
    }));
  };

  onChengeStatusActive = () => {
    this.setState((prev) => ({
      ...prev,
      ...{ arrToDisplay: 'active' },
    }));
  };

  onChengeStatusCompleted = () => {
    this.setState((prev) => ({
      ...prev,
      ...{ arrToDisplay: 'completed' },
    }));
  };

  render() {
    return (
      <>
        <TodosCreatorContainer arrToDisplay={this.state.arrToDisplay} />
        <div className="display__settings">
          <p className="task__amount">
            {' '}
            <span className="task__amount__data">
              {this.calcTodoAmount()}
            </span>{' '}
            items left
          </p>
          <div className="display__modes">
            <ButtonGroup variant="text" aria-label="text button group">
              <Button onClick={this.onChengeStatusAll}>All</Button>
              <Button onClick={this.onChengeStatusActive}>Active</Button>
              <Button onClick={this.onChengeStatusCompleted}>Completed</Button>
            </ButtonGroup>
          </div>
          <Button variant="contained" onClick={this.onClearCompletedClick}>
            Clear complited
          </Button>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  todosAll: state.todoReducer.todosAll,
});

const mapDispatchToProps = {
  setTodosAll,
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
