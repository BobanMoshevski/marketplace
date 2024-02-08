import { useContext } from "react";
import { useRouteError } from "react-router-dom";
import { Box } from "@mui/material";
import { ThemeContext } from "../../util/context/themeProvider/ThemeProvider";
import MainNavigation from "../../components/navigations/mainNavigation/MainNavigation";
import ErrorContent from "../../components/pageContents/errorContetnt/ErrorContent";

const ErrorPage = () => {
  const { isDark, modeDark, modeLight } = useContext(ThemeContext);
  const error = useRouteError();
  let title = "An error occurred!";
  let message = "Something went wrong!";

  const pageBgColor = isDark ? modeDark.light : modeLight.light;

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = "404 Not found!";
    message = "Could not find resource or page!";
  }

  return (
    <Box sx={{ bgcolor: pageBgColor, minHeight: "100vh", textAlign: "center" }}>
      <MainNavigation />
      <ErrorContent title={title} message={message} />
    </Box>
  );
};

export default ErrorPage;
