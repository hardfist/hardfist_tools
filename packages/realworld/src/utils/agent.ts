import Axios from 'axios';
import * as jwtService from 'service/jwt';
import jwtDecode from 'jwt-decode';
import { history } from './history';

const API_ROOT = 'https://conduit.productionready.io/api';
const agent = Axios.create({
  baseURL: API_ROOT
});
agent.interceptors.request.use(req => {
  req.headers['Authorization'] = `Token ${jwtService.getToken()}`;
  return req;
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

type JWTPayload = {
  id: string;
  username: string;
  exp: number;
};
export function isTokenValid(token: string) {
  try {
    const decoded_jwt: JWTPayload = jwtDecode(token);
    const current_time = Date.now().valueOf() / 1000;
    return decoded_jwt.exp > current_time;
  } catch (error) {
    return false;
  }
}

export { agent };
