import React from 'react';
import { Menu, MenuItem, ListItemIcon, Typography } from '@mui/material';
import {
  AccountCircle as AccountIcon,
  ShoppingBag as OrdersIcon,
  Cancel as CancellationsIcon,
  RateReview as ReviewsIcon,
  Logout as LogoutIcon
} from '@mui/icons-material';

const UserMenu = ({ anchorEl, open, onClose , HandleLogout , user }) => {
  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: 'visible',
          backgroundColor: 'rgba(0, 0, 0, 0.04)',
          backdropFilter: 'blur(150px)',
          WebkitBackdropFilter: 'blur(150px)',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          mt: 1.5,
          color: '#fff',
          '& .MuiSvgIcon-root': {
            color: '#fff',
          },
          '& .MuiAvatar-root': {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: 'rgba(0, 0, 0, 0.04)',
            backdropFilter: 'blur(150px)',
            WebkitBackdropFilter: 'blur(150px)',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
            boxShadow: '-1px -1px 4px rgba(0, 0, 0, 0.05)',
          },
        },
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      {[
        { icon: <AccountIcon fontSize="small" />, label: 'Manage My Account' },
        { icon: <OrdersIcon fontSize="small" />, label: 'My Orders' },
        { icon: <CancellationsIcon fontSize="small" />, label: 'My Cancellations' },
        { icon: <ReviewsIcon fontSize="small" />, label: 'My Reviews' },
        { icon: <LogoutIcon fontSize="small" />, label: 'Logout' , action: HandleLogout }
      ].map(({ icon, label , action}, index) => (
        <MenuItem
          key={index}
          onClick= {() => {
          onClose();
          if (action) action();
        }}
          sx={{
            '&:hover': {
              color: 'rgba(255, 255, 255, 0.62)',
              '& .MuiSvgIcon-root': {
                color: 'rgba(255, 255, 255, 0.8)',
              },
            },
          }}
        >
           {/* {user && (
        <MenuItem disabled sx={{ opacity: 1, cursor: "default" }}>
          <Typography variant="body2" sx={{ mx: 1, color: '#fff' }}>
            Hi, {user.name || user.email}
          </Typography>
        </MenuItem>
      )} */}
          <ListItemIcon sx={{ color: 'inherit' }}>{icon}</ListItemIcon>
          <Typography variant="inherit" sx={{ color: 'inherit' }}>
            {label}
          </Typography>
        </MenuItem>
      ))}
    </Menu>
  );
};

export default UserMenu;
