import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useContext } from 'react';
import Context from '../utils/Context.js';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Tooltip } from '@mui/material';
import AppBarUserMenu from './AppBarUserMenu';

function DrawerAppBar({ title, children }) {
  const {
    isLoggedIn,
  } = useContext(Context);

  const getNavItems = () => {
    if (isLoggedIn) {
      return [
        {
          name: 'Home',
          component: <HomeIcon />,
          url: '/',
        },
        {
          name: 'Notifications',
          component: <NotificationsIcon />,
          url: '/notifications',
        },
      ];
    }
    return [
      {
        name: 'Home',
        component: <HomeIcon />,
        url: '/',
      },
      {
        name: 'Login',
        component: <LoginIcon />,
        url: '/login',
      },
      {
        name: 'Sign Up',
        component: <PersonAddIcon />,
        url: '/signup',
      },
    ];
  };

  return (
    <Box sx={{ display: 'flex' }} className="app-bar">
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: 'block' }}
          >
            {title}
          </Typography>
          <Box sx={{ display: 'block' }}>
            {getNavItems().map((item) => (
              <Button sx={{ color: '#fff' }} key={item.name} component={Link} to={item.url}>
                <Tooltip title={item.name}>
                  {item.component}
                </Tooltip>
              </Button>
            ))}
          </Box>
          { isLoggedIn && <AppBarUserMenu /> }
        </Toolbar>
      </AppBar>
      {children}
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
