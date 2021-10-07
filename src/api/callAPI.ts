import axios from 'axios';
import { ITodos, UpdateInfo } from '../redux/types';
import { AxiosResponse } from './axiosTypes';

interface ToUpdate {
  id: number;
  isCompleted: boolean;
}

interface ToCompleteAll {
  isCompletedAll: boolean;
}

class CallAPI {
  instance: any;

  constructor() {
    this.instance = axios.create({
      baseURL: 'http://localhost:3000',
    });
  }

  setAuthToken = (token) => {
    if (token) {
      this.instance = axios.create({
        baseURL: 'http://localhost:3000',
        headers: {
          Authorization: token,
        },
      });
      console.log('setAuthToken is invoked and it`s true: ', this.instance);
    } else {
      this.instance = axios.create({
        baseURL: 'http://localhost:3000',
      });
      console.log('setAuthToken is invoked and it`s false: ', this.instance);
    }
  };

  // requestToAPI(params) {

  // }
  addTodo = (body: ITodos) => {
    try {
      return this.instance
        .post('/todos', body)
        .then((response: AxiosResponse) => response);
    } catch (error) {
      console.error(error);
    }
  };

  updateTodo = (bodyToUpdate: UpdateInfo) => {
    try {
      return this.instance
        .patch('/todos/update', bodyToUpdate)
        .then((response: AxiosResponse) => response);
    } catch (error) {
      console.error(error);
    }
  };

  deleteTodo = (selectedId: number) => {
    try {
      return this.instance
        .delete(`/todos/delete?id=${selectedId}`)
        .then((response: AxiosResponse) => response);
    } catch (error) {
      console.error(error);
    }
  };

  clearDone = () => {
    try {
      return this.instance
        .delete('/todos/cleardone')
        .then((response: AxiosResponse) => response);
    } catch (error) {
      console.error(error);
    }
  };

  completeAll = (isCompletedAllStatus: boolean) => {
    const body: ToCompleteAll = {
      isCompletedAll: isCompletedAllStatus,
    };
    try {
      return this.instance
        .patch('/todos/completeall', body)
        .then((response: AxiosResponse) => response);
    } catch (error) {
      console.error(error);
    }
  };

  getTodos = () =>
    this.instance.get('/todos').then((response: AxiosResponse) => response);

  registration = (userData) => {
    try {
      return this.instance
        .post('/registration', userData)
        .then((response: AxiosResponse) => response);
    } catch (error) {
      console.error(error);
    }
  };

  login = (userData) => {
    try {
      return this.instance
        .post('/login', userData)
        .then((response: AxiosResponse) => {
          const { token } = response.data;
          localStorage.setItem('access_token', token);
          this.setAuthToken(token);
          //   const decoded = jwtDecode(token);
          //   return { response, decoded };
          return response;
        });
    } catch (error) {
      console.error(error);
    }
  };

  logout = () => {
    localStorage.removeItem('access_token');
    this.setAuthToken(false);
    // after return need to dispatch result with empty Obj by setCurrentUser
    // also should clean up todos in store
  };
}

const callAPI = new CallAPI();

export default callAPI;
