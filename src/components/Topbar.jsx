import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Refresh, Notifications } from '@mui/icons-material';
import FileUploadIcon from '@mui/icons-material/FileUpload';

const IconWithLabel = ({ icon, label }) => (
  <Box
    sx={{
      border: '1px solid #ccc',
      borderRadius: 1,
      px: 1.5,
      py: 0.5,
      display: 'flex',
      alignItems: 'center',
      gap: 0.5,
    }}
  >
    <IconButton size="small">{icon}</IconButton>
    {label && (
      <Typography variant="caption" sx={{ fontWeight: 400, color: 'text.secondary' }}>
        {label}
      </Typography>
    )}
  </Box>
);

const Topbar = () => {
  return (
    <Box
      sx={{
        borderBottom: '1px solid #ccc',
        px: 2,
        py: 1.5,
        mb: 3,
        mt: 1,
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h5">Email Forwarding Dashboard</Typography>
        <Box display="flex" gap={1}>
          {/* <IconWithLabel icon={<FileUploadIcon/>} label="Export" /> */}
          <IconWithLabel icon={<Refresh />} label="Refresh" />
          {/* <IconWithLabel icon={<Notifications />} /> */}
        </Box>
      </Box>
    </Box>
  );
};

export default Topbar;
