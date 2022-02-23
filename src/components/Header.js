import { Typography } from '@mui/material';
import React from 'react';

function Header() {
  return (
    <Typography
      sx={{
        fontFamily: 'Permanent Marker',
        mt: 3,
        mx: 0,
        mb: 2,
        textAlign: 'center',
        fontSize: 40,
        color: 'deeppink',
        textShadow: '1px 1px darkmagenta',
      }}
      component='h1'
      variant='h5'
    >
      The Ultimate Form
    </Typography>
  );
}

export default Header;
