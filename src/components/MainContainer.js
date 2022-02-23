import { Container } from '@mui/material';
import React from 'react';

function MainContainer({ children, props }) {
  return (
    <Container
      sx={{
        mt: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      component='main'
      maxWidth='xs'
      {...props}
    >
      {children}
    </Container>
  );
}

export default MainContainer;
