import { Button } from '@mui/material';
import React from 'react';

function PrimaryButton({ children, ...props }) {
  return (
    <Button
      type='submit'
      sx={{
        mt: 3,
        mx: 0,
        mb: 2,
      }}
      variant='contained'
      color='primary'
      fullWidth
      {...props}
    >
      {children}
    </Button>
  );
}

export default PrimaryButton;
