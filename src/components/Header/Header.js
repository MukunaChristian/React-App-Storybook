import React from 'react';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import './header.css';



export const Header = ({ user, onLogin, onLogout, onCreateAccount,label }) => (
  <header >
    <div className="storybook-header">
      <div>
        <h1>{label}</h1>
      </div>
      <div>
        {user ? (
          <>
            <span className="welcome">
              Welcome, <b>{user.name}</b>!
            </span>
            <Button size="small" onClick={onLogout} label="Log out" />
          </>
        ) : ( 
          <>
            <Button size="small" onClick={onLogin} label="HOME" />
            <Button primary size="small" onClick={onCreateAccount} label="Sign up" />
          </>
        )}
      </div>

      </div>
  </header>
);


Header.propTypes = {
  label: PropTypes.string.isRequired,
};
Header.defaultProps = {
  
};