import { TextField } from "@mui/material";
import styled from "styled-components";

export const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#263238",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#263238",
  },
  "& .MuiOutlinedInput-root": {
    marginBottom: "20px",
    "& fieldset": {
      borderColor: "#212121",
    },
    "&:hover fieldset": {
      borderColor: "#9e9e9e",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#263238",
    },
  },
});
