import { Link, Typography } from '@mui/material';
import React from 'react';

function CopyRight() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/fizyomustafa/">
        Fizyomustafa Github
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default CopyRight;
