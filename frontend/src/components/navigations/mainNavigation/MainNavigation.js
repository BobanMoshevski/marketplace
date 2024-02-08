import { useContext } from "react";
import { useRouteLoaderData } from "react-router-dom";
import { AppBar, Container, Toolbar } from "@mui/material";
import { ThemeContext } from "../../../util/context/themeProvider/ThemeProvider";
import AppBarCompanyLogo from "../../appBar/appBarCompanyLogo/AppBarCompanyLogo";
import AppBarLinks from "../../appBar/appBarLinks/AppBarLinks";
import MobileMenuIcon from "../../appBar/mobileIcon/mobileMenuIcon/MobileMenuIcon";
import ShopingCardModal from "../../appBar/modal/shopingCardModal/ShopingCardModal";
import LoginButton from "../../appBar/loginButton/LoginButton";
import SwitchToggle from "../../appBar/switchTheme/SwitchThemeToggle";

const MainNavigation = () => {
  const token = useRouteLoaderData("root");
  const { isDark, modeDark, modeLight } = useContext(ThemeContext);

  const appBarBgColor = isDark ? modeDark.dark : modeLight.dark;

  return (
    <AppBar position="static" sx={{ bgcolor: appBarBgColor }}>
      <Container>
        <Toolbar sx={{ justifyContent: "space-between" }} disableGutters>
          <AppBarCompanyLogo />

          <AppBarLinks />

          <MobileMenuIcon />

          {token && <ShopingCardModal />}

          <LoginButton token={token} />

          <SwitchToggle />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default MainNavigation;
