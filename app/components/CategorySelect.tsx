"use client";

import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { Dispatch, SetStateAction } from "react";

const categories = ["Technology", "Cooking", "Travelling", "Coding", "Trading"];

interface CategorySelectProps {
  selectedCategory: string;
  setSelectedCategory: Dispatch<SetStateAction<string>>;
}

export default function CategorySelect({
  selectedCategory,
  setSelectedCategory,
}: CategorySelectProps) {
  const handleChange = (event: SelectChangeEvent) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <FormControl sx={{ minWidth: 250, mb: 3 }}>
      <InputLabel id="category-label">Category</InputLabel>

      <Select
        labelId="category-label"
        value={selectedCategory}
        label="Category"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>All Categories</em>
        </MenuItem>

        {categories.map((category) => (
          <MenuItem key={category} value={category}>
            {category}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
