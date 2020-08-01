import React, { useContext } from 'react';
import { NavStyles } from '../styles/Nav';
import { CookieContext } from '../utils/context';

export default function Nav() {
    const { removeCookie } = useContext(CookieContext);
    // TODO: add loader animation on top
    // TODO: logout browserhistory.push
    const handleLogout = event => {
        event.preventDefault();
        // Logout from firebase
        // Remove the token
        removeCookie('user');
    };

  return (
    <NavStyles>
        <ul>
          <li>
            <a href="/" style={{ color: 'var(--black)' }}>
               <h3>icebox admin</h3>
            </a>
          </li>
          <li>
            {/* eslint-disable-next-line */}
            <a href="" onClick={event => handleLogout(event)} style={{ color: 'var(--red-macos)' }}>
              logout
            </a>
          </li>
        </ul>
    </NavStyles>
  );
}