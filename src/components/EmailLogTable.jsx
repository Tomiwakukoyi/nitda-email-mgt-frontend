import React, { useEffect, useState } from 'react';
import supabase from '../lib/supabaseClient';
import TablePagination from '@mui/material/TablePagination';
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Typography, Box, IconButton,
  Menu, MenuItem, ListItemIcon, ListItemText
} from '@mui/material';
import { MoreVert, Info, Send, Delete } from '@mui/icons-material';
import SearchBar from './SearchBar';
// import StatusBadge from './StatusBadge';

const EmailLogTable = ({ emails, setEmails, }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [expandedRows, setExpandedRows] = useState({});
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(6); //PAGINATION
  const [currentRow, setCurrentRow] = useState(null);

  useEffect(() => {
    async function fetchEmails() {
      const { data, error } = await supabase
        .from('email_logs')
        .select(`
          subject,
          body,
          to,
          sender,
          received_at,
          status
        `)
       .order('received_at', { ascending: false }); // Newest First
      console.log('Supabase data:', data);
      console.log('Supabase error:', error);

      if (error) {
        console.error('Failed to fetch emails:', error.message);
      } else {
        setEmails(data || []);
      }
    }

    fetchEmails();
  }, [setEmails]);

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

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
   const toggleRowExpansion = (index) => {
    setExpandedRows((prev) => ({
    ...prev,
    [index]: !prev[index],
  }));
};

  return (
    <Box sx={{ border: '1px solid #ccc', borderRadius: 2, px: 2, py: 1, mt: 3 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={1} mt={1}>
        <Typography variant="h5" sx={{ fontWeight: 600 }}>Incoming Mails</Typography>
        <SearchBar />
      </Box>
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>Subject</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Body</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>To</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>From</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Received At</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Sent_at</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>AI Classification</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {emails.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} align="center">No emails found.</TableCell>
              </TableRow>
            ) : (
              emails.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, i) => (
                <TableRow key={i}>
                  <TableCell>{row.subject}</TableCell>
                  {/* <TableCell>{row.body}</TableCell> */}
{/* character Limitation */}
                 <TableCell> 
  {expandedRows[i]
    ? row.body
    : `${row.body?.slice(0, 20)}${row.body?.length > 20 ? '...' : ''}`}
  {row.body?.length > 20 && (
    <Typography
      component="span"
      onClick={() => toggleRowExpansion(i)}
      sx={{ color: 'primary.main', ml: 1, cursor: 'pointer', fontSize: '0.8rem' }}
    >
      {expandedRows[i] ? 'Show less' : 'Show more'}
    </Typography>
  )}
</TableCell>

                  <TableCell>{row.to}</TableCell>
                  <TableCell>{row.sender}</TableCell>
                  <TableCell>
                    {row.received_at
                      ? new Date(parseInt(row.received_at)).toLocaleString()
                      : 'N/A'}
                  </TableCell>
                  <TableCell>
                    <span>12:00</span>
                  </TableCell>
                  <TableCell>
                    <span>For DG</span>
                  </TableCell>
                  <TableCell>
                    {/* {row.status === 'read' ? 'Read' : 'Unread'} */}

                      {/* STATUS BADGE ADJUSTMENT */}
                    <span>{row.status === 'read' ? 'Treated' : 'Pending'}</span> 
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination  //PAGINATION
        component="div"
        count={emails.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[]} // Hide dropdown
        labelRowsPerPage=""     // Hide label
      />

      
    </Box>
  );
};

export default EmailLogTable;
