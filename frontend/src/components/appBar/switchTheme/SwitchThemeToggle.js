import { useContext } from "react";
import { Box, FormControlLabel } from "@mui/material";
import { ThemeContext } from "../../../util/context/themeProvider/ThemeProvider";
import { SwitchTheme } from "./SwitchThemeToggleStyle";

const SwitchToggle = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <Box>
      <FormControlLabel
        onClick={toggleTheme}
        control={<SwitchTheme defaultChecked />}
      />
    </Box>
  );
};

export default SwitchToggle;
