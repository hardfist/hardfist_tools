import Axios from 'axios';
const API_ROOT = 'https://conduit.productionready.io/api';
const agent = Axios.create({
  baseURL: API_ROOT
});
const setToken = (token: string) => {
  agent.defaults.headers.common['Authorization'] = `Token ${token}}`;
};
export { agent, setToken };
