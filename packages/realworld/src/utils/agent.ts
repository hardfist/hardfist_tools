import Axios from 'axios';
import { history } from './history';

const API_ROOT = 'https://conduit.productionready.io/api';
const TOKEN_KEY = 'Authorization';
const agent = Axios.create({
  baseURL: API_ROOT
});
agent.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    switch (error.response.status) {
      case 401:
        history.push('/register');
        break;
      case 404:
      case 403:
        history.push('/');
        break;
    }
    return Promise.reject(error);
  }
);
const setToken = (token: string) => {
  if (token) {
    agent.defaults.headers.common[TOKEN_KEY] = `Token ${token}}`;
  } else {
    delete agent.defaults.headers.common[TOKEN_KEY];
  }
};
export function isTokenValid(token: string) {}
export { agent, setToken };
