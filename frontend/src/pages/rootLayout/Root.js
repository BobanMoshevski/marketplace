import { useContext, useEffect } from "react";
import { Outlet, useLoaderData, useSubmit } from "react-router-dom";
import { Box, Container } from "@mui/material";
import { ThemeContext } from "../../util/context/themeProvider/ThemeProvider";
import { getTokenDuration } from "../../util/http/loader/loader";
import MainNavigation from "../../components/navigations/mainNavigation/MainNavigation";

const RootLayout = () => {
  const { isDark, modeDark, modeLight } = useContext(ThemeContext);
  const token = useLoaderData();
  const submit = useSubmit();

  const pageBgColor = isDark ? modeDark.light : modeLight.light;

  useEffect(() => {
    const tokenDuration = getTokenDuration();

    if (!token) {
      return;
    }

    if (token === "EXPIRED") {
      submit(null, { method: "post", action: "/logout" });
    }

    setTimeout(() => {
      submit(null, { method: "post", action: "/logout" });
    }, tokenDuration);
  }, [token, submit]);

  return (
    <Box sx={{ bgcolor: pageBgColor, minHeight: "100vh" }}>
      <MainNavigation />
      <Container>
        <Outlet />
      </Container>
    </Box>
  );
};

export default RootLayout;
