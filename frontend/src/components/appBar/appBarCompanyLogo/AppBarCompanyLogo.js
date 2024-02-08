import { NavLink } from "react-router-dom";
import { Typography } from "@mui/material";
import StoreIcon from "@mui/icons-material/Store";
import classes from "./AppBarCompanyLogoStyle.module.css";

const AppBarCompanyLogo = () => {
  return (
    <NavLink to="/" className={classes["company-logo"]}>
      <StoreIcon sx={{ fontSize: "40px" }} />
      <Typography
        variant="h5"
        sx={{
          display: { xs: "none", md: "flex" },
          fontFamily: "monospace",
          fontWeight: 700,
        }}
      >
        Marketplace
      </Typography>
    </NavLink>
  );
};

export default AppBarCompanyLogo;
