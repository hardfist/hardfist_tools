import React from 'react';
import { Link } from 'react-router-dom';
import { ListErrors } from 'components/ListErrors';
import { useStoreActions, useStoreState } from 'store';
import * as Auth from 'service/auth';
export const Login = () => {
  const { errors, email, password, inProgress } = useStoreState(x => x.auth);
  const { submit_form, change_email, change_password } = useStoreActions(
    ({ auth }) => {
      return {
        submit_form: (email: string, password: string) => async (
          e: React.FormEvent
        ) => {
          e.preventDefault();
          await auth.login({
            email,
            password
          });
        },
        change_email: (email: string) => {
          auth.update_field_auth({
            email
          });
        },
        change_password: (password: string) => {
          auth.update_field_auth({
            password
          });
        }
      };
    }
  );
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

            <form onSubmit={submit_form(email, password)}>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => change_email(e.target.value)}
                  />
                </fieldset>

                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => change_password(e.target.value)}
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
