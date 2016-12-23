import React from 'react';

const Input = ({ input, label, type }) => (
  <div>
    <label>{label}</label>
    <input className="form-control" {...input} type={type} />
  </div>
);

export default Input;