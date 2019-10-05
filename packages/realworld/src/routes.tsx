import { App } from 'components/App';
import { Login } from 'components/Login';
import { Register } from 'components/Register';
export const routes = [
  {
    path: '/',
    component: App
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  }
];
