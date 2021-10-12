import callAPI from './API';
import { ITodos, IUser, UpdateInfo } from '../redux/types';

const fetchToAPI = {
  async getTodos() {
    const method = 'GET';
    const url = 'http://localhost:3000/todos';
    const response = await callAPI.requestToApi(method, url);
    return response.data;
  },
  async addTodo(newTask: ITodos) {
    const method = 'POST';
    const url = 'http://localhost:3000/todos';
    const response = await callAPI.requestToApi(method, url, newTask);
    return response.data;
  },
  async updateTodo(bodyToUpdate: UpdateInfo) {
    const method = 'PATCH';
    const url = 'http://localhost:3000/todos/update';
    const response = await callAPI.requestToApi(method, url, bodyToUpdate);
    return response.data;
  },
  async deleteTodo(selectedId: number) {
    const method = 'DELETE';
    const url = `http://localhost:3000/todos/delete?id=${selectedId}`;
    const response = await callAPI.requestToApi(method, url);
    return response.data;
  },
  async clearDone() {
    const method = 'DELETE';
    const url = 'http://localhost:3000/todos/cleardone';
    const response = await callAPI.requestToApi(method, url);
    return response.data;
  },
  async completeAll(isCompletedAllStatus: boolean) {
    const method = 'PATCH';
    const url = 'http://localhost:3000/todos/completeall';
    const data = {
      isCompletedAll: isCompletedAllStatus,
    };
    const response = await callAPI.requestToApi(method, url, data);
    return response.data;
  },
  async registration(userData: IUser) {
    const method = 'POST';
    const url = 'http://localhost:3000/registration';
    const registrationResponse = await callAPI.requestToApi(
      method,
      url,
      userData,
    );
    return registrationResponse.data;
  },
  async login(userData: IUser) {
    const method = 'POST';
    const url = 'http://localhost:3000/login';
    const responseData = await callAPI.requestToApi(method, url, userData);
    localStorage.setItem('access_token', responseData.data.token);
    localStorage.setItem('refresh_token', responseData.data.refreshToken);
    console.log('LocalStorage after login => ', localStorage);
    return responseData.data;
  },
  async logout(userId: string) {
    const method = 'POST';
    const url = 'http://localhost:3000/logout';
    const body = {
      id: userId,
    };
    const logoutResponse = await callAPI.requestToApi(method, url, body);
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    console.log('LocalStorage after logout => ', localStorage);
    return logoutResponse;
  },
};

export default fetchToAPI;
