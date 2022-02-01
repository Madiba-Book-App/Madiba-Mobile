import axios, {AxiosError, AxiosResponse, AxiosRequestConfig} from 'axios';
import {API_BASE} from '@env';
import storage from 'src/utils/mmkvStorage';

const http = axios.create({
  baseURL: `${API_BASE}`,
});

const requestHandler = async (request: AxiosRequestConfig) => {
  const token = storage.getString('token');
  request.headers['access-token'] = `Bearer ${token}`;

  return request;
};

const errorHandler = (err: AxiosError) => {
  const {statusText, status} = err?.response || {};
  const message = err?.response?.data?.message || err?.message;

  if (status === 401) {
    storage.delete('token');
  }

  return Promise.reject({
    ...err,
    error: true,
    message: message || statusText,
    data: {
      ...err.response,
      message: message || statusText,
    },
  });
};

export const successHandler = (response: AxiosResponse) => response;

http.interceptors.request.use(async request => await requestHandler(request));

http.interceptors.response.use(
  response => {
    if (response?.data?.data?.token) {
      storage.set('token', response.data.data.token);
    }
    return successHandler(response);
  },
  error => errorHandler(error),
);

export default http;
