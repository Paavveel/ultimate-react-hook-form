import { TextField } from '@mui/material';
import React from 'react';

const Input = props => {
  return <TextField variant='outlined' margin='normal' fullWidth {...props} />;
};

export default Input;
