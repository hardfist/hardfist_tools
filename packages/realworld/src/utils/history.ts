import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

export function navigate(path: string) {
  history.push(path);
}
