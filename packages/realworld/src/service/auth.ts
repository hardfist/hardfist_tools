import { agent } from 'utils/agent';
import { setLocalStorage } from 'utils/lib';
import { saveToken, TOKEN_KEY, destroyToken } from 'service/jwt';

export function current() {
  return agent.get('/user');
}

export async function login({
  email,
  password
}: {
  email: string;
  password: string;
}) {
  let resp = await agent.post<{
    user: com.hardfist.realworld.User;
  }>('/users/login', {
    user: {
      email,
      password
    }
  });
  const {
    data: {
      user: { token }
    }
  } = resp;
  setLocalStorage(TOKEN_KEY, token);
  saveToken(token);
  return resp;
}
export async function register({
  username,
  email,
  password
}: {
  username: string;
  email: string;
  password: string;
}) {
  let resp = await agent.post<{
    user: com.hardfist.realworld.User;
  }>('/users', {
    user: {
      username,
      email,
      password
    }
  });
  const {
    data: {
      user: { token }
    }
  } = resp;
  saveToken(token);
  return resp;
}

export function logout() {
  localStorage.removeItem(TOKEN_KEY);
  destroyToken();
}

export function save(user: com.hardfist.realworld.User) {
  return agent.post('/user', { user });
}
