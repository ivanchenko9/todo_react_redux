import config from '../../config';
import callAPI from './API';
import { ITodos, IUser, UpdateInfo, completeAllObj } from '../redux/types';

const fetchToAPI = {
  async getTodos() {
    const method = 'GET';
    const url = `${config.url}/todos`;
    const response = await callAPI.requestToApi(method, url);
    return response.data;
  },
  async addTodo(newTask: ITodos) {
    const method = 'POST';
    const url = `${config.url}/todos`;
    const response = await callAPI.requestToApi(method, url, newTask);
    return response.data;
  },
  async updateTodo(bodyToUpdate: UpdateInfo) {
    const method = 'PATCH';
    const url = `${config.url}/todos`;
    const response = await callAPI.requestToApi(method, url, bodyToUpdate);
    return response.data;
  },
  async deleteTodo(selectedId: number) {
    const method = 'DELETE';
    const url = `${config.url}/todos/?id=${selectedId}`;
    const response = await callAPI.requestToApi(method, url);
    return response.data;
  },
  async clearDone() {
    const method = 'DELETE';
    const url = `${config.url}/todos`;
    const response = await callAPI.requestToApi(method, url);
    return response.data;
  },
  async completeAll(usersData: completeAllObj) {
    const method = 'POST';
    const url = `${config.url}/todos/bulkupdate`;
    const response = await callAPI.requestToApi(method, url, usersData);
    return response.data;
  },
  async registration(userData: IUser) {
    const method = 'POST';
    const url = `${config.url}/registration`;
    const registrationResponse = await callAPI.requestToApi(
      method,
      url,
      userData,
    );
    return registrationResponse.data;
  },
  async login(userData: IUser) {
    const method = 'POST';
    const url = `${config.url}/login`;
    const responseData = await callAPI.requestToApi(method, url, userData);
    localStorage.setItem('access_token', responseData.data.token);
    localStorage.setItem('refresh_token', responseData.data.refreshToken);
    console.log('LocalStorage after login => ', localStorage);
    return responseData.data;
  },
  async logout(userId: string) {
    const method = 'POST';
    const url = `${config.url}/logout`;
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
