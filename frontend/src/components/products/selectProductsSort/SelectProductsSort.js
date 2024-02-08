import { useContext, useEffect, useState } from "react";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { ThemeContext } from "../../../util/context/themeProvider/ThemeProvider";

const SelectProductsSort = ({ setSortBy }) => {
  const [sort, setSort] = useState("");
  const { isDark, modeDark, modeLight } = useContext(ThemeContext);
  const borderColorTheme = isDark ? modeLight.light : modeDark.dark;

  useEffect(() => {
    setSortBy(sort);
  }, [sort, setSortBy]);

  return (
    <Box sx={{ width: 200 }}>
      <FormControl
        fullWidth
        sx={{
          "& label.Mui-focused": {
            color: "#455a64",
          },
          "& .MuiInput-underline:after": {
            borderBottomColor: "#455a64",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: borderColorTheme,
            },
            "&:hover fieldset": {
              borderColor: modeLight.dark,
            },
            "&.Mui-focused fieldset": {
              borderColor: "#455a64",
            },
          },
        }}
      >
        <InputLabel id="select-label">Sort products by</InputLabel>
        <Select
          labelId="select-label"
          id="simple-select"
          value={sort}
          label="Sort products by"
          onChange={(e) => setSort(e.target.value)}
        >
          <MenuItem value="">None</MenuItem>
          <MenuItem value="title">Title</MenuItem>
          <MenuItem value="cost">Price</MenuItem>
          <MenuItem value="rating">Rating</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectProductsSort;
