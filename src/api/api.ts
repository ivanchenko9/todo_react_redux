import * as axios from 'axios';
// бавить типизацию массивам тудушек
interface ToUpdate {
  id: number;
  isCompleted: boolean;
}

interface ToDelete {
  id: number;
}

interface ToCompleteAll {
  isCompletedAll: boolean;
}

const instance = axios.create({
  baseURL: 'http://localhost:3000',
});

const todosAPI = {
  addTodo(rawTodo: any) {
    try {
      const stringifyTodo: any = JSON.stringify(rawTodo);
      return instance
        .post('/todos', stringifyTodo)
        .then((response: any) => console.log(response.data));
    } catch (error) {
      console.error(error);
    }
  },
  updateTodo(selectedId: number, selectedArr: any[]) {
    let newTodoStatus: boolean;
    selectedArr.forEach((todo: any) => {
      if (todo.id === selectedId) {
        newTodoStatus = !todo.isCompleted;
      }
    });
    try {
      const rawQuerySetting: ToUpdate = {
        id: selectedId,
        isCompleted: newTodoStatus,
      };
      const parsedQuerySetting: any = JSON.stringify(rawQuerySetting);
      return instance
        .post('/todos/update', parsedQuerySetting)
        .then((response: any) => console.log(response.data));
    } catch (error) {
      console.error(error);
    }
  },
  deleteTodo(selectedId: number) {
    try {
      const rawQuerySetting: ToDelete = {
        id: selectedId,
      };
      const parsedQuerySetting: any = JSON.stringify(rawQuerySetting);
      return instance
        .post('/todos/delete', parsedQuerySetting)
        .then((response: any) => console.log(response.data));
    } catch (error) {
      console.error(error);
    }
  },
  clearDone() {
    try {
      return instance
        .post('/todos/cleardone')
        .then((response: any) => console.log(response.data));
    } catch (error) {
      console.error(error);
    }
  },
  completeAll(isCompletedAllStatus: boolean) {
    const rawQuerySetting: ToCompleteAll = {
      isCompletedAll: isCompletedAllStatus,
    };
    const parsedQuerySetting: any = JSON.stringify(rawQuerySetting);
    try {
      return instance
        .post('/todos/completeall', parsedQuerySetting)
        .then((response: any) => console.log(response.data));
    } catch (error) {
      console.error(error);
    }
  },
  fetchTodos() {
    return instance.get().then((response: any) => response.data);
  },
};

export default todosAPI;
