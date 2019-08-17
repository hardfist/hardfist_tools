import axios from 'axios';
import qs from 'qs';
function get<
  T extends com.hardfist.spa.BaseResponse = com.hardfist.spa.BaseResponse
>(url: string, params = {}): Promise<T> {
  return axios.get(url, { params });
}

function post<T = any>(
  url: string,
  data = {},
  config = {}
): Promise<com.hardfist.spa.BaseResponse<T>> {
  return axios.post(url, qs.stringify(data), config);
}
axios.defaults.timeout = 5000;
axios.defaults.withCredentials = true;
axios.interceptors.response.use(
  response => {
    const res = response.data;
    if (res.err_no === 0) {
      return res;
    }
    return Promise.reject(res);
  },
  error => {
    return Promise.reject(error);
  }
);
export { get, post };
