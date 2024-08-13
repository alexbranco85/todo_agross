import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';

const CustomHeader: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" align='center' sx={{ flexGrow: 1, color: '#fff' }}>
          To-Do List AgRoss
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default CustomHeader;
