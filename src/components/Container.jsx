import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React, { useEffect } from 'react';
import AppBar from './AppBar.jsx';

export default function Container({ children, title }) {
  useEffect(() => {
    if (title) {
      document.title = title;
    }
  }, [title]);

  return (
    <Box>
      <CssBaseline />
      <AppBar title={title}>
        <Box
          component="main"
          sx={{width: '100%', p: 3}}
        >
          <Toolbar />
          {children}
        </Box>
      </AppBar>
    </Box>
  );
}
