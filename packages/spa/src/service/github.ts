import Axios from 'axios';
const axios = Axios.create({
  baseURL: 'https://api.github.com/'
});
export async function user(username: string) {
  return axios.get(`/users/${username}`);
}
export async function repo(reponame: string) {
  return axios.get(`/repo/${reponame}`);
}
