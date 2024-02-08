import { NavLink } from "react-router-dom";
import classes from "./DrawerLinks.module.css";

const DrawerLinks = ({ setIsDrawerOpen }) => {
  const drawerLinks = ["Home", "Products"];

  return (
    <>
      <ul className={classes["drawer-list"]}>
        {drawerLinks.map((drawerLink) => (
          <li key={drawerLink} className={classes["drawer-list-items"]}>
            <NavLink
              to={drawerLink === "Home" ? "/" : "/products"}
              onClick={() => setIsDrawerOpen(false)}
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              {drawerLink}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default DrawerLinks;
