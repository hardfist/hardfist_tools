import loadable from '@loadable/component';
import { wrapDefault } from 'utils/export';
const Detail = loadable(wrapDefault(() => import('pages/detail'), 'Detail'));
const Home = loadable(wrapDefault(() => import('pages/home'), 'Home'));
export const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/detail',
    exact: true,
    component: Detail
  }
];
