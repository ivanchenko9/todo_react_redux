import callAPI from './API';
import { ITodos, IUser, UpdateInfo } from '../redux/types';

const fetchToAPI = {
  async getTodos() {
    const method = 'GET';
    const url = 'http://localhost:3000/todos';
    const newArr: ITodos[] = await callAPI.requestToApi(method, url);
    return newArr;
  },
  async addTodo(newTask: ITodos) {
    const method = 'POST';
    const url = 'http://localhost:3000/todos';
    const newArr: ITodos[] = await callAPI.requestToApi(method, url, newTask);
    return newArr;
  },
  async updateTodo(bodyToUpdate: UpdateInfo) {
    const method = 'PATCH';
    const url = 'http://localhost:3000/todos/update';
    const newArr: ITodos[] = await callAPI.requestToApi(
      method,
      url,
      bodyToUpdate,
    );
    return newArr;
  },
  async deleteTodo(selectedId: number) {
    const method = 'DELETE';
    const url = `http://localhost:3000/todos/delete?id=${selectedId}`;
    const newArr: ITodos[] = await callAPI.requestToApi(method, url);
    return newArr;
  },
  async clearDone() {
    const method = 'DELETE';
    const url = 'http://localhost:3000/todos/cleardone';
    const newArr: ITodos[] = await callAPI.requestToApi(method, url);
    return newArr;
  },
  async completeAll(isCompletedAllStatus: boolean) {
    const method = 'PATCH';
    const url = 'http://localhost:3000/todos/completeall';
    const data = {
      isCompletedAll: isCompletedAllStatus,
    };
    const newArr: ITodos[] = await callAPI.requestToApi(method, url, data);
    return newArr;
  },
  async registration(userData: IUser) {
    const method = 'POST';
    const url = 'http://localhost:3000/registration';
    const registrationResponse = await callAPI.requestToApi(
      method,
      url,
      userData,
    );
    return registrationResponse;
  },
  async login(userData: IUser) {
    const method = 'POST';
    const url = 'http://localhost:3000/login';
    const responseData = await callAPI.requestToApi(method, url, userData);
    localStorage.setItem('access_token', responseData.token);
    return responseData;
  },
  async logout() {
    localStorage.removeItem('access_token');
    // const method = 'POST';
    // const url = 'http://localhost:3000/logout';
    // const logoutResponse = await callAPI.requestToApi(method, url), userInfo;
    const logoutResponse = { message: 'Logout successfuly!' };
    return logoutResponse;
  },
};

export default fetchToAPI;
