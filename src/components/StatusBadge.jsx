import React from 'react';
import { CheckCircle, Schedule, Error } from '@mui/icons-material';

const StatusBadge = ({ status }) => {
  const config = {
    'Treated': { color: '#8fbc8f', icon: <CheckCircle fontSize="small" /> },
    'Pending': { color: '#f4a460', icon: <Schedule fontSize="small" /> },
    'Failed': { color: '#cc0000', icon: <Error fontSize="small" /> },
  }[status] || { color: '#9e9e9e', icon: null };

  return (
    <span style={{
      backgroundColor: config.color,
      color: 'rgb(255, 255, 255)',
      padding: '4px 10px',
      borderRadius: '20px',
      fontSize: '0.75rem',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px',
    }}>
      {config.icon}
      {status}
    </span>
  );
};

export default StatusBadge;