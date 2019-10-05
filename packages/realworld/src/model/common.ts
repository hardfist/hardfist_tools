import { action, Action } from 'easy-peasy';
type User = com.hardfist.realworld.User;
export interface Article {
  slug: string;
}

interface CommonModel {
  appName: string;
  token?: string;
  currentUser?: User;
  appLoaded: boolean;
  viewChangeCounter: number;
  load_app: Action<
    CommonModel,
    { user: User; token: string; appLoaded: boolean }
  >;
  set_auth: Action<CommonModel, com.hardfist.realworld.User>;
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
  set_auth: action((state, user) => {
    state.currentUser = user;
  }),
  load_app: action((state, { user, token, appLoaded }) => {
    state.token = token;
    state.currentUser = user;
    state.appLoaded = appLoaded;
  }),
  logout: action(state => {
    state.token = undefined;
    state.currentUser = undefined;
  }),
  submit_article: action((state, { slug }) => {
    state.token = undefined;
    state.currentUser = undefined;
  }),
  save_setting: action((state, { error, user }) => {
    state.currentUser = error ? undefined : user;
  }),

  login: action((state, { token, user }) => {
    state.token = user.token;
    state.currentUser = user;
  }),
  delete_article: action(state => {
    // state.redirectTo = '/';
  })
};
