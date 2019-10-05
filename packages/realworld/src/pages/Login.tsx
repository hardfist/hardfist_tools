import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ListErrors } from 'components/ListErrors';
import { useStoreActions, useStoreState } from 'store';
export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
                    onChange={e => setEmail(e.target.value)}
                  />
                </fieldset>

                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
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
