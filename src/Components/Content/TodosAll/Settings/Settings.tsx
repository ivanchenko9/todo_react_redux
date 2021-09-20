import React from 'react';
import { connect } from 'react-redux';
import './Settings.css';

const Settings: React.FunctionComponent = (props) => {
  const calcTodoAmount = () => {
    if (props.todosAll.length) {
      const todoAmount = props.todosAll.reduce((total, curent) => {
        if (!curent.isCompleted) {
          return total + 1;
        }
        return total;
      }, 0);
      return todoAmount;
    }
    return 0;
  };
  return (
       <div className="display__settings">
            <p className="task__amount"> <span className="task__amount__data">{calcTodoAmount()}</span> items left</p>
            <div className="display__modes">
                <button className="mode__all">All</button>
                <button className="mode__active">Active</button>
                <button className="mode__completed">Completed</button>
            </div>
            <button className="clear__completed">Clear complited</button>
        </div>
  );
};

const mapStateToProps = (state) => ({
  todosAll: state.todoReducer.todosAll,
});

export default connect(mapStateToProps)(Settings);
