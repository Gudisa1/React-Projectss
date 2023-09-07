import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";

function SearchField({ search, setSearch }) {
  return (
    <TextField
      variant="outlined"
      label="Search"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      style={{ marginTop: "20px", marginLeft: "35px", marginBottom: "20px" }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}

export default SearchField;
