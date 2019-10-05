import { agent } from 'utils/agent';

export function current() {
  return agent.get('/user');
}
export function login({
  email,
  password
}: {
  email: string;
  password: string;
}) {
  return agent.post<{ user: com.hardfist.realworld.User }>('/users/login', {
    user: {
      email,
      password
    }
  });
}
export function register({
  username,
  email,
  password
}: {
  username: string;
  email: string;
  password: string;
}) {
  return agent.post<{ user: com.hardfist.realworld.User }>('/users', {
    user: {
      username,
      email,
      password
    }
  });
}

export function save(user: com.hardfist.realworld.User) {
  return agent.post('/user', { user });
}
