import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Refresh, Notifications } from '@mui/icons-material';
import FileUploadIcon from '@mui/icons-material/FileUpload';

const Topbar = ({ onRefresh }) => {
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
          <Box
            sx={{
              border: '1px solid #ccc',
              borderRadius: 1,
              px: 1.5,
              py: 0.5,
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
              cursor: 'pointer',
            }}
            onClick={onRefresh} // 👈 Hook up refresh
          >
            <IconButton size="small">
              <Refresh />
            </IconButton>
            <Typography variant="caption" sx={{ fontWeight: 400, color: 'text.secondary' }}>
              Refresh
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Topbar;
