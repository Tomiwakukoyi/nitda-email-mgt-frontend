import React from 'react';
import { Box } from '@mui/material';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import StatsGrid from './StatsGrid';
import EmailLogTable from './EmailLogTable';

const DashboardLayout = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, bgcolor: '#f9fafb', minHeight: '100vh', p: 3 }}>
        <Topbar />
        <StatsGrid />
        <EmailLogTable />
      </Box>
    </Box>
  );
};

export default DashboardLayout;