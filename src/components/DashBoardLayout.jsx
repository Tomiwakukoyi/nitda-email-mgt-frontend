import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import StatsGrid from './StatsGrid';
import EmailLogTable from './EmailLogTable';
import supabase from '../lib/supabaseClient';

const DashboardLayout = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    async function fetchEmails() {
      const { data, error } = await supabase
        .from('emails')
        .select(`
          subject,
          body,
          to_email,
          from_email,
          internal_date
        `);

      if (error) {
        console.error('Error fetching emails:', error.message);
      } else {
        setEmails(data || []);
      }
    }

    fetchEmails();
  }, []);

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, bgcolor: '#f9fafb', minHeight: '100vh', p: 3 }}>
        <Topbar />
        <StatsGrid totalEmails={emails.length} />
        <EmailLogTable emails={emails} setEmails={setEmails} />
      </Box>
    </Box>
  );
};

export default DashboardLayout;
