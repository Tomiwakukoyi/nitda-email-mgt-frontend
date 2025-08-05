import React, { useState } from 'react';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
  Tooltip,
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Mail as EmailLogsIcon,
  Rule as RulesIcon,
  BarChart as AnalyticsIcon,
  Settings as SettingsIcon
} from '@mui/icons-material';

const Sidebar = () => {
  const [selected, setSelected] = useState('Dashboard');
  const [isOpen, setIsOpen] = useState(true); // default open

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon /> },
    { text: 'Email Logs', icon: <EmailLogsIcon /> },
    { text: 'Analytics', icon: <AnalyticsIcon /> },
    { text: 'Settings', icon: <SettingsIcon /> },
  ];

  const handleSelect = (item) => {
    setSelected(item);
  };

  return (
    <Box
      sx={{
        width: isOpen ? 240 : 72,
        transition: 'width 0.3s',
        bgcolor: 'background.paper',
        height: '100vh',
        p: 2,
        borderRight: '1px solid #ddd',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {/* Header Section */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        {isOpen && (
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1rem' }}>
              EmailForward Pro
            </Typography>
            <Typography variant="caption" color="text.secondary">
              NITDA Email Management
            </Typography>
          </Box>
        )}
        <Box
          onClick={() => setIsOpen(!isOpen)}
          sx={{ cursor: 'pointer', ml: isOpen ? 1 : 'auto' }}
        >
          <MenuOpenIcon />
        </Box>
      </Box>

      <Divider sx={{ mb: 2 }} />

      {/* Navigation Items */}
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ justifyContent: isOpen ? 'initial' : 'center' }}>
            <Tooltip title={!isOpen ? item.text : ''} placement="right">
              <ListItemButton
                selected={selected === item.text}
                onClick={() => handleSelect(item.text)}
                sx={{
                  borderRadius: 1,
                  justifyContent: isOpen ? 'initial' : 'center',
                  px: 2,
                  '&.Mui-selected': {
                    backgroundColor: 'action.selected',
                  },
                }}
              >
                <ListItemIcon sx={{ minWidth: 0, mr: isOpen ? 2 : 'auto', justifyContent: 'center' }}>
                  {item.icon}
                </ListItemIcon>
                {isOpen && <ListItemText primary={item.text} />}
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
