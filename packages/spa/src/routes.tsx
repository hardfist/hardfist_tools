import loadable from '@loadable/component';
import { wrapDefault } from 'utils/export';

export const routes = [
  {
    path: '/redux',
    exact: true,
    component: loadable(wrapDefault(() => import('pages/redux'), 'Redux'))
  },
  {
    path: '/local',
    exact: true,
    component: loadable(wrapDefault(() => import('pages/counter'), 'Local'))
  },
  {
    path: '/todo_list',
    exact: true,
    component: loadable(
      wrapDefault(() => import('pages/todo_list'), 'TodoList')
    )
  }
];
