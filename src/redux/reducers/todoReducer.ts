enum TodoActionTypes {
    SET_TODOS = 'SET_TODOS',
    CHANGE_IS_CONFIRMED_ALL_STATUS = 'CHANGE_IS_CONFIRMED_ALL_STATUS',
    CREATE_TASK = 'CREATE_TASK',
}

interface TodoState {
    todosAll: any[];
    isConfirmedAll: boolean;
}

interface SetTodosAction {
    type: TodoActionTypes.SET_TODOS;
    payload: any[];
}

interface ChangeIsConfirmedAllAction {
    type: TodoActionTypes.CHANGE_IS_CONFIRMED_ALL_STATUS;
    payload: boolean;
}

interface CreateTaskAction {
    type: TodoActionTypes.CREATE_TASK;
    payload: string;
}

type TodoAction = SetTodosAction | ChangeIsConfirmedAllAction | CreateTaskAction

const initilState: TodoState = {
  todosAll: [
    {
      id: 1,
      isCompleted: false,
      title: 'todo1',
    },
    {
      id: 2,
      isCompleted: false,
      title: 'todo2',
    },
    {
      id: 3,
      isCompleted: false,
      title: 'todo3',
    },
  ],
  isConfirmedAll: false,
};

const todoReducer = (state = initilState, action: TodoAction): TodoState => {
  switch (action.type) {
    case TodoActionTypes.CHANGE_IS_CONFIRMED_ALL_STATUS:
    { return {
      ...state,
      isConfirmedAll: action.payload,
    }; }
    case TodoActionTypes.SET_TODOS:
    { return {
      ...state,
      todosAll: action.payload,
    }; }
    case TodoActionTypes.CREATE_TASK:
    { const newTask = {
      id: Date.now(),
      isCompleted: false,
      title: action.payload,
    };
    return {
      ...state,
      todosAll: [...state.todosAll, newTask],
    }; }
    default:
      return state;
  }
};

export const createTaskAC = (taskText) => ({ type: TodoActionTypes.CREATE_TASK, payload: taskText });
export const setIsConfirmedAll = (isConfirmedAll) => ({ type: TodoActionTypes.CHANGE_IS_CONFIRMED_ALL_STATUS, payload: isConfirmedAll });
export const setTodosAll = (newArray) => ({ type: TodoActionTypes.SET_TODOS, payload: newArray });

export default todoReducer;
