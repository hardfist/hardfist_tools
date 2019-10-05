import React, { useState } from 'react';
import { ListErrors } from 'components/ListErrors';
import { Link } from 'react-router-dom';
import { useStoreActions, useStoreState } from 'store';
import { useLocalStore } from 'utils/model';
import { model as LoginModel } from 'pages/Login';
export const Register = () => {
  const [{ email, password }, { set_email, set_password }] = useLocalStore(
    LoginModel
  );
  const [username, set_username] = useState('');
  const { errors, inProgress } = useStoreState(x => x.auth);
  const { submitForm } = useStoreActions(({ auth }) => {
    return {
      submitForm: (username: string, email: string, password: string) => async (
        ev: React.FormEvent
      ) => {
        ev.preventDefault();
        auth.register({ username, email, password });
      },
      ...auth
    };
  });
  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign Up</h1>
            <p className="text-xs-center">
              <Link to="login">Have an account?</Link>
            </p>

            <ListErrors errors={errors} />

            <form onSubmit={submitForm(username, email, password)}>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={e => set_username(e.target.value)}
                  />
                </fieldset>

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
