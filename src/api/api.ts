import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000',
});

const todosAPI = {
  addTodo(rawTodo) {
    try {
      const stringifyTodo = JSON.stringify(rawTodo);
      return instance.post('/todos', stringifyTodo).then((response) => console.log(response.data));
    } catch (error) {
      console.error(error);
    }
  },
  updateTodo(selectedId, selectedArr) {
    let newTodoStatus;
    selectedArr.forEach((todo) => {
      if (todo.id === selectedId) {
        newTodoStatus = !todo.isCompleted;
      }
    });
    try {
      const rawQuerySetting = {
        id: selectedId,
        isCompleted: newTodoStatus,
      };
      const parsedQuerySetting = JSON.stringify(rawQuerySetting);
      return instance.post('/todos/update', parsedQuerySetting).then((response) => console.log(response.data));
    } catch (error) {
      console.error(error);
    }
  },
  deleteTodo(selectedId) {
    try {
      const rawQuerySetting = {
        id: selectedId,
      };
      const parsedQuerySetting = JSON.stringify(rawQuerySetting);
      return instance.post('/todos/delete', parsedQuerySetting).then((response) => console.log(response.data));
    } catch (error) {
      console.error(error);
    }
  },
  clearDone() {
    try {
      return instance.post('/todos/cleardone').then((response) => console.log(response.data));
    } catch (error) {
      console.error(error);
    }
  },
  completeAll(isCompletedAllStatus) {
    const rawQuerySetting = {
      isCompletedAll: isCompletedAllStatus,
    };
    const parsedQuerySetting = JSON.stringify(rawQuerySetting);
    try {
      return instance.post('/todos/completeall', parsedQuerySetting).then((response) => console.log(response.data));
    } catch (error) {
      console.error(error);
    }
  },
};

export default todosAPI;
