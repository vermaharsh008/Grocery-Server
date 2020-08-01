import React from 'react';
import propTypes from 'prop-types';

import Input from './Input';
import { UserRowStyles } from '../styles/Main';

export default function ItemRow() {
  return (
    <UserRowStyles>
      <ul>
        <li>
            <Input type="checkbox" name="search" id="search" />
        </li>
        <li>Milk</li>
        <li>
            <div>
                <button style={{background: 'var(--red-macos)', borderRadius: '4px'}}>-</button>
                <button style={{background: 'var(--green-macos)', borderRadius: '4px'}}>+</button>
                <span style={{marginLeft: '5px'}}>12</span>
            </div>
        </li>
        <li>
            $10.99
        </li>
        <li>
            $13.99
        </li>
      </ul>
    </UserRowStyles>
  );
}
