import { NavLink } from "react-router-dom";
import { Box } from "@mui/material";
import classes from "./AppBarLinks.module.css";

const AppBarLinks = () => {
  const appBarLinks = ["Home", "Products"];

  return (
    <Box sx={{ display: { xs: "none", sm: "flex" } }}>
      <ul className={classes.list}>
        {appBarLinks.map((navbarLink) => (
          <li key={navbarLink} className={classes["list-items"]}>
            <NavLink
              to={navbarLink === "Home" ? "/" : "/products"}
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              {navbarLink}
            </NavLink>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default AppBarLinks;
