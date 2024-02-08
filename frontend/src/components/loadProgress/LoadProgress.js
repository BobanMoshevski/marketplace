import { useContext } from "react";
import { Box, CircularProgress } from "@mui/material";
import { ThemeContext } from "../../util/context/themeProvider/ThemeProvider";

const LoadProgress = () => {
  const { isDark, modeDark } = useContext(ThemeContext);
  const loadProgressTheme = isDark ? modeDark.dark : "#fff";

  return (
    <Box display="flex" justifyContent="center">
      <CircularProgress
        size={120}
        sx={{ marginTop: "60px", color: loadProgressTheme }}
      />
    </Box>
  );
};

export default LoadProgress;
