import React from 'react';
import propTypes from 'prop-types';
import { StyledInput } from '../styles/Signin';

export default function Input({ type, name, id, placeholder, onChange, style }) {
  return <StyledInput type={type} name={name} id={id} placeholder={placeholder} onChange={onChange} style={style} />;
}

Input.propTypes = {
  type: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  id: propTypes.string,
  placeholder: propTypes.string,
  onChange: propTypes.func,
  style: propTypes.object,
};

Input.defaultProps = {
  placeholder: '',
  onChange: null,
  style: null,
  id: null,
};
