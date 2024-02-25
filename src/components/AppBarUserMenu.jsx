import { useContext, useState } from 'react';
import { Avatar, Box, Tooltip, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import Context from '../utils/Context.js';
import { imageBaseUrl } from '../utils/config.js';

const links = [
  {
    name: 'Update Profile',
    url: '/update-profile',
  },
  {
    name: 'Drafts',
    url: '/drafts',
  },
  {
    name: 'Logout',
    url: '/logout',
  }
];

export default function AppBarUserMenu() {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const {
    loggedInUser,
  } = useContext(Context);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const profilePic = loggedInUser.profile_pic ? `${imageBaseUrl}/${loggedInUser.profile_pic}` : '';

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Menu">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt={loggedInUser.name} src={profilePic} />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {links.map((link) => (
          <MenuItem key={link.name} onClick={handleCloseUserMenu} component={Link} to={link.url}>
            <Typography textAlign="center">{link.name}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  )
}
