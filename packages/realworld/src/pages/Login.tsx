import React from 'react';
import { Link } from 'react-router-dom';
import { ListErrors } from 'components/ListErrors';
import {
  action,
  actionOn,
  ActionOn,
  Action,
  Computed,
  computed
} from 'easy-peasy';
import { useStoreActions, useStoreState } from 'store';
import { useLocalStore } from 'utils/model';
export interface Model {
  email: string;
  password: string;
  set_email: Action<Model, string>;
  set_password: Action<Model, string>;
  double_email: Computed<Model, string>;
  on_change_email: ActionOn<Model>;
}
export const model: Model = {
  email: '',
  password: '',
  double_email: computed(state => {
    return state.email + state.email;
  }),
  set_email: action((state, email) => {
    state.email = email;
  }),
  set_password: action((state, password) => {
    state.password = password;
  }),
  on_change_email: actionOn(
    actions => actions.set_email,
    (state, target) => {
      console.log('email', target.payload);
    }
  )
};

export const Login = () => {
  const [
    { email, double_email, password },
    { set_email, set_password }
  ] = useLocalStore(model);
  console.log('x:', double_email);
  const { errors, inProgress } = useStoreState(x => x.auth);
  const { login } = useStoreActions(x => x.auth);
  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign In</h1>
            <p className="text-xs-center">
              <Link to="register">Need an account?</Link>
            </p>

            <ListErrors errors={errors} />

            <form
              onSubmit={e => {
                e.preventDefault();
                login({
                  email,
                  password
                });
              }}
            >
              <fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => set_email(e.target.value)}
                  />
                </fieldset>

                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => set_password(e.target.value)}
                  />
                </fieldset>

                <button
                  className="btn btn-lg btn-primary pull-xs-right"
                  type="submit"
                  disabled={inProgress}
                >
                  Sign in
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
