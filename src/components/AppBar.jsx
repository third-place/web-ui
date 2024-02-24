import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useContext } from 'react';
import Context from '../utils/Context.js';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Tooltip } from '@mui/material';

const drawerWidth = 240;

function DrawerAppBar({ title, window, children }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const {
    isLoggedIn,
    loggedInUser,
  } = useContext(Context);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

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
        {
          name: 'Profile',
          component: <PersonIcon />,
          url: `/u/${loggedInUser.username}`,
        },
        // {
        //   name: 'Update Profile',
        //   url: '/update-profile',
        // },
        // {
        //   name: 'Drafts',
        //   url: '/drafts',
        // },
        // {
        //   name: 'Logout',
        //   url: '/logout',
        // }
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

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        {title}
      </Typography>
      <Divider />
      <List>
        {getNavItems().map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton>
              <Link to={item.url}>
                <ListItemIcon>
                  {item.component}
                  <ListItemText className="nav-list-item-text">
                    {item.name}
                  </ListItemText>
                </ListItemIcon>
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }} className="app-bar">
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: 'block' }}
          >
            {title}
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {getNavItems().map((item) => (
                <Button sx={{ color: '#fff' }} key={item.name}>
                  <Link to={item.url}>
                    <Tooltip title={item.name}>
                      {item.component}
                    </Tooltip>
                  </Link>
                </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      { children }
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
