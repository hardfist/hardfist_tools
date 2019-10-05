import { action, Action, Thunk, thunk, computed, Computed } from 'easy-peasy';
import * as Auth from 'service/auth';
import { navigate } from 'utils/history';
type User = com.hardfist.realworld.User;

export interface AuthModel {
  user?: User; // 用户信息
  isAuthenticated: boolean; // 是否认证通过
  inProgress: boolean; // loaing
  errors: com.hardfist.realworld.Errors; // 注册登录的校验提示
  currentUser: Computed<AuthModel, User | undefined>;
  setState: Action<
    AuthModel,
    {
      [key: string]: any;
    }
  >;
  set_auth: Action<AuthModel, com.hardfist.realworld.User>;
  set_errors: Action<AuthModel, com.hardfist.realworld.Errors>;
  register: Thunk<
    AuthModel,
    {
      username: string;
      email: string;
      password: string;
    }
  >; // 注册
  login: Thunk<
    AuthModel,
    {
      email: string;
      password: string;
    }
  >; // 登录
}

export const auth: AuthModel = {
  inProgress: false,
  errors: {},
  isAuthenticated: false,
  currentUser: computed(state => {
    return state.user;
  }),
  set_auth: action((state, user) => {
    state.user = user;
  }),
  set_errors: action((state, errors) => {
    state.errors = errors;
  }),
  setState: action((state, newState) => {
    Object.assign(state, newState);
  }),
  login: thunk(async (actions, { email, password }, { getStoreActions }) => {
    actions.setState({ inProgress: true, errors: undefined });
    try {
      const {
        data: { user }
      } = await Auth.login({ email, password });
      actions.set_auth(user);
    } catch (err) {
      console.log('err:', err.response);
      actions.set_errors(err.response.data.errors);
      navigate('/');
    } finally {
      actions.setState({ inProgress: false });
    }
  }),
  register: thunk(async (actions, { username, email, password }) => {
    actions.setState({ inProgress: true, errors: undefined });
    try {
      const {
        data: { user }
      } = await Auth.register({ username, email, password });
      actions.set_auth(user);
    } catch (err) {
      actions.setState({
        errors: err.response && err.response.data && err.response.data.errors
      });
    } finally {
      actions.setState({ inProgress: false });
    }
  })
};
