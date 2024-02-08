import { Typography } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../../util/context/themeProvider/ThemeProvider";

const PageHeading = ({ pageTitle }) => {
  const { isDark, modeDark } = useContext(ThemeContext);
  const pageTitleColor = isDark ? modeDark.dark : "#fff";

  return (
    <Typography
      color={pageTitleColor}
      variant="h4"
      textAlign="center"
      paddingTop="35px"
    >
      {pageTitle}
    </Typography>
  );
};

export default PageHeading;
