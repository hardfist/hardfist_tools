import loadable from '@loadable/component';
import { wrapDefault } from 'utils/export';
const Local = loadable(wrapDefault(() => import('pages/local'), 'Local'));
const Home = loadable(wrapDefault(() => import('pages/home'), 'Home'));
export const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/local',
    exact: true,
    component: Local
  }
];
