import { agent } from 'utils/agent';
import { User } from 'model';

export function current() {
  return agent.get('/user');
}
export function login(email: string, password: string) {
  return agent.post('/users/login', {
    user: {
      email,
      password
    }
  });
}
export function register(username: string, email: string, password: string) {
  return agent.post('/users', {
    user: {
      username,
      email,
      password
    }
  });
}

export function save(user: User) {
  return agent.post('/user', { user });
}
