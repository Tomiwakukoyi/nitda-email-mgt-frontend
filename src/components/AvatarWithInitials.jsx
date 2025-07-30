import React from 'react';
import { Avatar } from '@mui/material';

const AvatarWithInitials = ({ name }) => {
  const getInitials = (str) =>
    str
      .split(' ')
      .map((s) => s[0])
      .join('')
      .toUpperCase();

  return (
    <Avatar sx={{ 
      bgcolor: 'grey',
      width: 24,   // Reduced from default 40px
      height: 24,  // Reduced from default 40px
      fontSize: '0.75rem' // Reduced font size
    }}>
      {getInitials(name || 'User')}
    </Avatar>
  );
};

export default AvatarWithInitials;