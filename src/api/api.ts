import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { ITodos } from '../redux/types';

interface ToUpdate {
  id: number;
  isCompleted: boolean;
}

interface ToCompleteAll {
  isCompletedAll: boolean;
}

let instance = axios.create({
  baseURL: 'http://localhost:3000',
});

export const setAuthToken = (token) => {
  if (token) {
    instance = axios.create({
      baseURL: 'http://localhost:3000',
      headers: {
        Authorization: token,
      },
    });
    console.log('Invoke setAuthToken and it`s true: ', instance);
  } else {
    instance = axios.create({
      baseURL: 'http://localhost:3000',
    });
    console.log('Invoke setAuthToken and it`s false: ', instance);
  }
};

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
    console.log('Instance in fetchTodos: ', instance);
    return instance.get('/todos').then((response: any) => response.data);
  },
  registration(userData) {
    try {
      return instance
        .post('/registration', userData)
        .then((response) => response.data);
    } catch (error) {
      console.error(error);
    }
  },
  login(userData) {
    try {
      return instance.post('/login', userData).then((response) => {
        const { token } = response.data;
        localStorage.setItem('access_token', token);
        setAuthToken(token);
        const decoded = jwtDecode(token);
        return decoded;
      });
    } catch (error) {
      console.error(error);
    }
  },
  logout() {
    localStorage.removeItem('access_token');
    setAuthToken(false);
    // after return need to dispatch result with empty Obj by setCurrentUser
  },
};

export default todosAPI;
