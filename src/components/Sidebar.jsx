import React,{useState} from 'react';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
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
import { Dashboard as DashboardIcon,Mail as EmailLogsIcon,
  Rule as RulesIcon,
  BarChart as AnalyticsIcon,
  // People as RecipientsIcon,
  Settings as SettingsIcon
} from '@mui/icons-material';



const Sidebar = () => {
  const [selected, setSelected] = React.useState('Dashboard');
 const [isOpen, setIsOpen] = useState(false);
  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon /> },
    { text: 'Email Logs', icon: <EmailLogsIcon /> },
    // { text: 'Forwarding Rules', icon: <RulesIcon /> },
    { text: 'Analytics', icon: <AnalyticsIcon /> },
    // { text: 'Recipients', icon: <RecipientsIcon /> },
    { text: 'Settings', icon: <SettingsIcon /> },
  ];
console.log(isOpen,"the use state button")
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
      <div className='logo-menu'>
       <div>
         <h1 className="main-logo">
          EmailForward Pro
        </h1>
        <h1 className='logo-subtitle'>
           NITDA Email Management
        </h1>
       </div>
       {/* menu buttion */}
       <div style={{cursor:"pointer"}} onClick={ ()=> setIsOpen(!isOpen)}>
        <MenuOpenIcon />
       </div>
      </div>

      <Divider sx={{ mb: 2 }} />

      
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
