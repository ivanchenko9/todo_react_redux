import * as axios from 'axios';
import { ITodos } from '../redux/types';

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
  addTodo(body: ITodos) {
    try {
      return instance
        .post('/todos', body)
        .then((response) => console.log(response.data));
    } catch (error) {
      console.error(error);
    }
  },
  updateTodo(selectedId: number, selectedArr: ITodos[]) {
    let newTodoStatus: boolean;
    selectedArr.forEach((todo: ITodos) => {
      if (todo.id === selectedId) {
        newTodoStatus = !todo.isCompleted;
      }
    });
    try {
      const body: ToUpdate = {
        id: selectedId,
        isCompleted: newTodoStatus,
      };
      return instance
        .patch('/todos/update', body)
        .then((response) => console.log(response.data));
    } catch (error) {
      console.error(error);
    }
  },
  deleteTodo(selectedId: number) {
    try {
      return instance
        .delete(`/todos/delete?id=${selectedId}`)
        .then((response: any) => console.log(response.data));
    } catch (error) {
      console.error(error);
    }
  },
  clearDone() {
    try {
      return instance
        .delete('/todos/cleardone')
        .then((response: any) => console.log(response.data));
    } catch (error) {
      console.error(error);
    }
  },
  completeAll(isCompletedAllStatus: boolean) {
    const body: ToCompleteAll = {
      isCompletedAll: isCompletedAllStatus,
    };
    try {
      return instance
        .patch('/todos/completeall', body)
        .then((response: any) => console.log(response.data));
    } catch (error) {
      console.error(error);
    }
  },
  fetchTodos() {
    return instance.get('/todos').then((response: any) => response.data);
  },
};

export default todosAPI;
