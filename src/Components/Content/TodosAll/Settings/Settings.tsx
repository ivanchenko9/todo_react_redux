import React from 'react';
import { connect } from 'react-redux';
import { setTodosAll } from '../../../../redux/reducers/todoReducer.ts';
import TodosCreatorContainer from './TodosContainer/TodosContainer.tsx';
import './Settings.css';
import todosAPI from '../../../../api/api.ts';

class Settings extends React.Component {
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
  }

  onClearCompletedClick = () => {
    todosAPI.clearDone();
    const newArray = this.props.todosAll.filter((todo) => todo.isCompleted !== true);
    this.props.setTodosAll(newArray);
  }

  render() {
    return (
      <>
         <TodosCreatorContainer arrToDisplay={this.state.arrToDisplay}/>
         <div className="display__settings">
              <p className="task__amount"> <span className="task__amount__data">{this.calcTodoAmount()}</span> items left</p>
              <div className="display__modes">
                  <button className="mode__all"
                  onClick={() => this.setState((prev) => ({ ...prev, ...{ arrToDisplay: 'all' } }))}>All</button>
                  <button className="mode__active"
                  onClick={() => this.setState((prev) => ({ ...prev, ...{ arrToDisplay: 'active' } }))}>Active</button>
                  <button className="mode__completed"
                  onClick={() => this.setState((prev) => ({ ...prev, ...{ arrToDisplay: 'completed' } }))}>Completed</button>
              </div>
              <button className="clear__completed" onClick={this.onClearCompletedClick}>Clear complited</button>
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
