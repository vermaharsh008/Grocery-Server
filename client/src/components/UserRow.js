import React from 'react';
import propTypes from 'prop-types';

import Input from '../components/Input';
import { UserRowStyles } from '../styles/Main';

export default function UserRow() {
  return (
    <UserRowStyles>
      <ul>
        <li>
            <Input type="checkbox" name="search" id="search" />
        </li>
        <li>hunter12@yahoo.com</li>
        <li>
            hunter12
        </li>
        <li>
            hunter twelve
        </li>
        <li style={{ display: 'flex', justifyContent: 'space-between' }}>
            <a href='/user/123123123123123' style={{color: 'var(--blue-macos)'}}>Items</a>
            <a href='/user/123123123123123' style={{color: 'var(--blue-macos)'}}>Receipts</a>
        </li>
      </ul>
    </UserRowStyles>
  );
}
