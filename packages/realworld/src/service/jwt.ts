export const TOKEN_KEY = 'jwt';

export const getToken = () => {
  return window.localStorage.getItem(TOKEN_KEY) || '';
};

export const saveToken = (token: string) => {
  window.localStorage.setItem(TOKEN_KEY, token);
};

export const destroyToken = () => {
  window.localStorage.removeItem(TOKEN_KEY);
};
