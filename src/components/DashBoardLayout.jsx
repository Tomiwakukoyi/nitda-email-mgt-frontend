import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import StatsGrid from './StatsGrid';
import EmailLogTable from './EmailLogTable';
import supabase from '../lib/supabaseClient';
// import StatusBadge from './StatusBadge';

const DashboardLayout = () => {
  const [email_logs, setEmails] = useState([]);

  const fetchEmails = async () => {
    const { data, error } = await supabase
      .from('email_logs')
      .select('subject, body, to, sender, received_at')
      .order('received_at', { ascending: false });

    if (!error) setEmails(data || []);
    else console.error('Fetch error:', error.message);
  };

  useEffect(() => {
    fetchEmails();
  }, []);

  return (
    <Box sx={{ display: 'flex' }}>
      {/* <Sidebar /> */}
      <Box component="main" sx={{ flexGrow: 1, bgcolor: '#f9fafb', minHeight: '100vh', p: 3 }}>
        <Topbar onRefresh={fetchEmails} />
        <StatsGrid totalEmails={email_logs.length} />
        <EmailLogTable emails={email_logs} setEmails={setEmails} />
      </Box>
    </Box>
  );
};

export default DashboardLayout;