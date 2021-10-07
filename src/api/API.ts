import axios from 'axios';
import { AxiosResponse } from './axiosTypes';

interface ToUpdate {
  id: number;
  isCompleted: boolean;
}

interface ToCompleteAll {
  isCompletedAll: boolean;
}

class CallAPI {
  axiosSettings: any;

  constructor() {
    this.axiosSettings = {};
  }

  refreshToken = async () => {
    console.log('Try to get new token');
  };

  requestToApi = async (method: string, url: string, data?: any) => {
    let response;
    try {
      this.axiosSettings = {
        ...this.axiosSettings,
        method,
        url,
      };
      if (data) {
        this.axiosSettings = {
          ...this.axiosSettings,
          method,
          url,
          data,
        };
      }
      if (localStorage.access_token) {
        const { access_token } = localStorage;
        console.log('Ine requestToApi() token is eaqual to => ', access_token);
        this.axiosSettings = {
          ...this.axiosSettings,
          method,
          url,
          data,
          headers: {
            Authorization: access_token,
          },
        };
      }

      console.log('in API axiosSettings eaqual to => ', this.axiosSettings);
      response = await axios(this.axiosSettings).then(
        (response: AxiosResponse) => response,
      );

      console.log('in API response eaqual to => ', response);

      if (
        response.status === 200 ||
        response.status === 201 ||
        response.status === 204
      ) {
        return response.data;
      }
    } catch (error) {
      if (response.status === 401) {
        // console.log('You are not authorized!');
        this.refreshToken();
        this.requestToApi(method, url, data);
      }
      console.error(error);
    }
  };
}

const callAPI = new CallAPI();

export default callAPI;
