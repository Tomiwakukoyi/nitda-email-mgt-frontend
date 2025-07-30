import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Typography, Box, IconButton,
  Menu, MenuItem, ListItemIcon, ListItemText
} from '@mui/material';
import { MoreVert, Visibility, VisibilityOff, Info, Send, Delete } from '@mui/icons-material';
import SearchBar from './SearchBar';
import StatusBadge from './StatusBadge';
import AvatarWithInitials from './AvatarWithInitials';

const rows = [
  {
    subject: 'Welcome to our service',
    name: 'John Doe',
    email: 'john.doe@example.com',
    received: '15/01/2024, 09:30:00',
    forwarded: '15/01/2024, 09:30:15',
    forwardedTo: 'support@company.com',
    status: 'Treated',
    opened: true,
  },
  {
    subject: 'Invoice #12345',
    name: 'Billing Team',
    email: 'billing@vendor.com',
    received: '15/01/2024, 10:15:00',
    forwarded: '15/01/2024, 10:15:08',
    forwardedTo: 'accounting@company.com',
    status: 'Pending',
    opened: false,
  },
   {
    subject: 'A new sign in',
    name: 'Security alert',
    email: 'myaccount@google.com',
    received: '28/07/2025, 11:00:00',
    forwarded: '29/07/2025, 12:45:09',
    forwardedTo: 'Network@company.com',
    status: 'Failed',
    opened: false,
  },
  {
    subject: 'Confirm your Startup',
    name: 'Supabase auth',
    email: 'supabase@example.com',
    received: '20/01/2025, 09:30:00',
    forwarded: '19/03/2025, 09:30:15',
    forwardedTo: 'security@company.com',
    status: 'Treated',
    opened: true,
  } ,
    {
    subject: 'Purchase Successful',
    name: 'Aliexpress',
    email: 'aliexpress@buy.com',
    received: '20/06/2025, 09:30:00',
    forwarded: '19/08/2025, 09:30:15',
    forwardedTo: 'purchase@company.com',
    status: 'Pending',
    opened: true,
  },
   {
    subject: 'Need more information',
    name: 'paypal',
    email: 'paypal@register.com',
    received: '18/07/2025, 09:30:00',
    forwarded: '29/10/2025, 09:30:15',
    forwardedTo: 'accounting@company.com',
    status: 'Failed',
    opened: true,
  },
];

const EmailLogTable = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentRow, setCurrentRow] = useState(null);

  const handleMenuOpen = (event, row) => {
    setAnchorEl(event.currentTarget);
    setCurrentRow(row);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setCurrentRow(null);
  };

  const handleAction = (action) => {
    console.log(`${action} for:`, currentRow);
    handleMenuClose();
    
  };

  return (
    <Box
      sx={{
        border: '1px solid #ccc',
        borderRadius: 2,
        px: 2,
        py: 1,
        mt: 3
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={1} mt={1}>
        <Typography variant="h5" sx={{ fontWeight: 600 }}>Email Forwarding Log</Typography>
        <SearchBar />
      </Box>
      <TableContainer component={Paper}>
        <Table size="small" sx={{
          '& .MuiTableCell-root': {
            paddingTop: '8px',
            paddingBottom: '8px',
          }
        }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ py: 1 }}>Subject</TableCell>
              <TableCell sx={{ py: 1 }}>From</TableCell>
              <TableCell sx={{ py: 1 }}>Received</TableCell>
              <TableCell sx={{ py: 1 }}>Forwarded</TableCell>
              <TableCell sx={{ py: 1 }}>Forwarded To</TableCell>
              <TableCell sx={{ py: 1 }}>Status</TableCell>
              <TableCell sx={{ py: 1 }}>Opened</TableCell>
              <TableCell sx={{ py: 1 }} />
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, i) => (
              <TableRow key={i}>
                <TableCell sx={{ py: '6px' }}>{row.subject}</TableCell>
                <TableCell sx={{ py: '6px' }}>
                  <Box display="flex" alignItems="center" gap={1}>
                    <AvatarWithInitials name={row.name} />
                    <Box sx={{ marginTop: '-2px' }}>
                      <Typography>{row.name}</Typography>
                      <Typography variant="caption">{row.email}</Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell sx={{ py: '6px' }}>{row.received}</TableCell>
                <TableCell sx={{ py: '6px' }}>{row.forwarded}</TableCell>
                <TableCell sx={{ py: '6px' }}>{row.forwardedTo}</TableCell>
                <TableCell sx={{ py: '6px' }}><StatusBadge status={row.status} /></TableCell>
                <TableCell sx={{ py: '6px' }}>
                  {row.opened ? <Visibility fontSize="small" /> : <VisibilityOff fontSize="small" />}
                </TableCell>
                <TableCell sx={{ py: '6px' }}>
                  <IconButton 
                    size="small"
                    onClick={(e) => handleMenuOpen(e, row)}
                  >
                    <MoreVert />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* dropdown menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={() => handleAction('View Details')}>
          <ListItemIcon>
            <Info fontSize="small" />
          </ListItemIcon>
          <ListItemText>View Details</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => handleAction('Resend')}>
          <ListItemIcon>
            <Send fontSize="small" />
          </ListItemIcon>
          <ListItemText>Resend</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => handleAction('Delete Log')}>
          <ListItemIcon>
            <Delete fontSize="small" />
          </ListItemIcon>
          <ListItemText>Delete Log</ListItemText>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default EmailLogTable;