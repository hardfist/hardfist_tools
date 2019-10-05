import { action, Action, Thunk, thunk } from 'easy-peasy';
import * as Auth from 'service/auth';
import { RootModel } from 'store';

type Errors = PlainObject;
enum SUBTYPE {
  LOGIN,
  REGISTER
}
export interface AuthModel {
  inProgress: boolean;
  errors: {
    [key: string]: string;
  };
  subtype: SUBTYPE;
  email: string;
  username: string;
  password: string;
  unload_page: Action<AuthModel>;
  start_async: Action<AuthModel, SUBTYPE>;
  change_username: Action<AuthModel, string>;
  change_email: Action<AuthModel, string>;
  change_password: Action<AuthModel, string>;
  setState: Action<
    AuthModel,
    {
      [key: string]: any;
    }
  >;
  update_field_auth: Action<
    AuthModel,
    {
      [key: string]: any;
    }
  >;
  register: Thunk<
    AuthModel,
    {
      username: string;
      email: string;
      password: string;
    },
    any,
    RootModel
  >;
  login: Thunk<
    AuthModel,
    {
      email: string;
      password: string;
    },
    any,
    RootModel
  >;
}

export const auth: AuthModel = {
  inProgress: false,
  errors: {},
  subtype: SUBTYPE.LOGIN,
  email: '',
  password: '',
  username: '',
  unload_page: action(() => {}),
  start_async: action((state, subtype) => {
    if (subtype === SUBTYPE.LOGIN) {
      state.subtype = SUBTYPE.LOGIN;
      state.inProgress = true;
    }
  }),
  update_field_auth: action((state, fields) => {
    Object.assign(state, fields);
  }),
  change_username: action((state, username) => {
    state.username = username;
  }),
  change_email: action((state, email) => {
    state.email = email;
  }),
  change_password: action((state, password) => {
    state.password = password;
  }),
  setState: action((state, newState) => {
    Object.assign(state, newState);
  }),
  login: thunk(async (actions, { email, password }, { getStoreActions }) => {
    actions.setState({ inProgress: true, errors: undefined });
    const {
      common: { login }
    } = getStoreActions();
    try {
      const result = await Auth.login({ email, password });
      console.log('result:', result);
      login(result as any);
    } catch (err) {
      actions.setState({
        errors: err.response && err.response.data && err.response.data.errors
      });
    } finally {
      actions.setState({ inProgress: false });
    }
  }),
  register: thunk(
    async (actions, { username, email, password }, { getStoreActions }) => {
      actions.setState({ inProgress: true, errors: undefined });
      const {
        common: { login }
      } = getStoreActions();
      try {
        const result = await Auth.register({ username, email, password });
        console.log('result:', result);
        login(result as any);
      } catch (err) {
        actions.setState({
          errors: err.response && err.response.data && err.response.data.errors
        });
      } finally {
        actions.setState({ inProgress: false });
      }
    }
  )
};
