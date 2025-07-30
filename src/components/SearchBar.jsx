import React from 'react';
import { InputAdornment, TextField } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchBar = ({ value, onChange }) => {
  return (
    <TextField
      variant="outlined"
      size="small"
      placeholder="Search emails..."
      value={value}
      onChange={onChange}
      sx={{ width: '300px', mb: 2, mt: 2}}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;
