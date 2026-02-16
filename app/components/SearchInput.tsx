"use client";

import { TextField } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

interface SearchInputProps {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
}

export default function SearchInput({
  searchTerm,
  setSearchTerm,
}: SearchInputProps) {
  return (
    <TextField
      label="Search by Title"
      variant="outlined"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      fullWidth
    />
  );
}
