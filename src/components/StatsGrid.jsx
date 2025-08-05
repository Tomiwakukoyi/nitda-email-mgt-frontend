import React from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';
import { MailOutline, Visibility, Pending } from '@mui/icons-material';
import DoneIcon from '@mui/icons-material/Done';

const StatsGrid = ({ totalEmails }) => {
  const stats = [
    {
      label: 'Total Emails',
      value: totalEmails,
      icon: <MailOutline fontSize="small" />,
      sub: '+14% from last hour',
    },
    { label: 'Delivered', value: 4, icon: <DoneIcon fontSize="small" />, sub: '47% success rate' },
    { label: 'Opened', value: 3, icon: <Visibility fontSize="small" />, sub: '30% open rate' },
    { label: 'Pending', value: 1, icon: <Pending fontSize="small" />, sub: 'Awaiting processing' },
  ];

  return (
    <Grid container spacing={2} mb={2} sx={{ width: '100%' }}>
      {stats.map((item, index) => (
        <Grid item xs={12} sm={6} md={3} key={index} sx={{ display: 'flex', flex: 1, minWidth: 0 }}>
          <Paper
            variant="outlined"
            sx={{
              border: '1px solid #ccc',
              px: 2,
              py: 1.5,
              borderRadius: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: 0.5,
              width: '100%',
              flex: 1,
            }}
          >
            <Box display="flex" alignItems="center" gap={1}>
              {item.icon}
              <Typography variant="subtitle2" fontWeight={600} color="text.primary">
                {item.label}
              </Typography>
            </Box>
            <Typography variant="h6" fontWeight={700} sx={{ mt: 0.5 }}>
              {item.value}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {item.sub}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default StatsGrid;
