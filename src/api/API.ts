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
    try {
      const { refresh_token } = localStorage;
      const method = 'POST';
      const url = 'http://localhost:3000/refresh';
      const data = {
        refreshToken: refresh_token,
      };
      const requestSettings = {
        method,
        url,
        data,
      };
      const refreshResponse = await axios(requestSettings).then(
        (response: AxiosResponse) => response,
      );
      const newAccessToken = refreshResponse.data.token;
      const newRefreshToken = refreshResponse.data.refreshToken;
      localStorage.setItem('access_token', newAccessToken);
      localStorage.setItem('refresh_token', newRefreshToken);
      console.log('refresh succesfuly...');
      return true;
    } catch (error) {
      console.log('some serious error...');
      console.error(error);
      return false;
    }
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
      response = await axios(this.axiosSettings)
        .then((response: AxiosResponse) => response)
        .catch((error) =>
          console.log('Error in the promise catch block => ', error),
        );

      if (
        response.status === 200 ||
        response.status === 201 ||
        response.status === 204
      ) {
        return response;
      }
    } catch (error) {
      if (localStorage.refresh_token) {
        const refreshResult = await this.refreshToken();
        if (refreshResult) {
          response = await this.requestToApi(method, url, data);
          return response;
        } else {
          response = { message: 'Failed to update refresh token!' };
          return response;
        }
      } else {
        console.log('There is no token in the LC!');
      }
      console.error(error);
    }
  };
}

const callAPI = new CallAPI();

export default callAPI;
