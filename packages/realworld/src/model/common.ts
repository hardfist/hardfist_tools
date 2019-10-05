import { action, Action } from 'easy-peasy';
export interface Article {
  slug: string;
}
export interface User {
  token: string;
  username: string;
  image: string;
}
interface CommonModel {
  appName: string;
  token?: string;
  currentUser?: User;
  appLoaded: boolean;
  viewChangeCounter: number;
  redirectTo?: string;
  load_app: Action<
    CommonModel,
    { user: User; token: string; appLoaded: boolean }
  >;
  redirect: Action<CommonModel>;
  logout: Action<CommonModel>;
  submit_article: Action<CommonModel, Article>;
  save_setting: Action<
    CommonModel,
    {
      error?: Error;
      user?: User;
    }
  >;
  login: Action<
    CommonModel,
    {
      user: User;
      token: string;
    }
  >;
  delete_article: Action<CommonModel>;
}
const initial_state = {
  appName: 'Conduit',
  appLoaded: false,
  viewChangeCounter: 0
};
export const common: CommonModel = {
  ...initial_state,
  load_app: action((state, { user, token, appLoaded }) => {
    state.token = token;
    state.currentUser = user;
    state.appLoaded = appLoaded;
  }),
  redirect: action(state => {
    state.redirectTo = undefined;
  }),
  logout: action(state => {
    state.redirectTo = '/';
    state.token = undefined;
    state.currentUser = undefined;
  }),
  submit_article: action((state, { slug }) => {
    state.redirectTo = `article/${slug}`;
    state.token = undefined;
    state.currentUser = undefined;
  }),
  save_setting: action((state, { error, user }) => {
    state.redirectTo = error ? undefined : '/';
    state.currentUser = error ? undefined : user;
  }),
  login: action((state, { token, user }) => {
    state.redirectTo = '/';
    state.token = user.token;
    state.currentUser = user;
  }),
  delete_article: action(state => {
    state.redirectTo = '/';
  })
};
