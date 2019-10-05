import React from 'react';
import { Link } from 'react-router-dom';
import { APP_NAME } from 'utils/lib';

const LoggedOutView = (props: {
  currentUser?: com.hardfist.realworld.User;
}) => {
  if (!props.currentUser) {
    return (
      <ul className="nav navbar-nav pull-xs-right">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link to="login" className="nav-link">
            Sign in
          </Link>
        </li>

        <li className="nav-item">
          <Link to="register" className="nav-link">
            Sign up
          </Link>
        </li>
      </ul>
    );
  }
  return null;
};

const LoggedInView = (props: { currentUser?: com.hardfist.realworld.User }) => {
  if (props.currentUser) {
    return (
      <ul className="nav navbar-nav pull-xs-right">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link to="editor" className="nav-link">
            <i className="ion-compose"></i>&nbsp;New Post
          </Link>
        </li>

        <li className="nav-item">
          <Link to="settings" className="nav-link">
            <i className="ion-gear-a"></i>&nbsp;Settings
          </Link>
        </li>

        <li className="nav-item">
          <Link to={`@${props.currentUser.username}`} className="nav-link">
            <img
              src={props.currentUser.image}
              className="user-pic"
              alt={props.currentUser.username}
            />
            {props.currentUser.username}
          </Link>
        </li>
      </ul>
    );
  }

  return null;
};

export const Header = (props: {
  currentUser?: com.hardfist.realworld.User;
}) => {
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          {APP_NAME.toLowerCase()}
        </Link>

        <LoggedOutView currentUser={props.currentUser} />

        <LoggedInView currentUser={props.currentUser} />
      </div>
    </nav>
  );
};
