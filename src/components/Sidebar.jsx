import React from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Mail as EmailLogsIcon,
  Rule as RulesIcon,
  BarChart as AnalyticsIcon,
  People as RecipientsIcon,
  Settings as SettingsIcon
} from '@mui/icons-material';

const Sidebar = () => {
  const [selected, setSelected] = React.useState('Email Logs');

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon /> },
    { text: 'Email Logs', icon: <EmailLogsIcon /> },
    { text: 'Forwarding Rules', icon: <RulesIcon /> },
    { text: 'Analytics', icon: <AnalyticsIcon /> },
    { text: 'Recipients', icon: <RecipientsIcon /> },
    { text: 'Settings', icon: <SettingsIcon /> },
  ];

  const handleSelect = (item) => {
    setSelected(item);
  };

  return (
    <Box
      sx={{
        width: 240,
        bgcolor: 'background.paper',
        height: '100vh',
        p: 2,
        borderRight: '1px solid #ddd'
      }}
    >
      {/* Header Section */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
          EmailForward Pro
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
           NITDA Email Management
        </Typography>
      </Box>

      <Divider sx={{ mb: 2 }} />

      {/* Navigation Title */}
      <Typography variant="subtitle1" sx={{ fontWeight: 'medium', mb: 1, pl: 1 }}>
        Navigation
      </Typography>

      {/* Navigation Items */}
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              selected={selected === item.text}
              onClick={() => handleSelect(item.text)}
              sx={{
                borderRadius: 1,
                '&.Mui-selected': {
                  backgroundColor: 'action.selected',
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 36 }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;