import { NavLink, useRouteLoaderData } from "react-router-dom";
import { Box } from "@mui/material";
import classes from "./ProductsNavigation.module.css";

const ProductsNavigation = () => {
  const token = useRouteLoaderData("root");

  return (
    <Box display="flex" justifyContent="center">
      <ul className={classes["products-list"]}>
        <li className={classes["products-item"]}>
          <NavLink to="/products">All products</NavLink>
        </li>

        {token && (
          <li className={classes["products-item"]}>
            <NavLink to="/products/new">Add new product</NavLink>
          </li>
        )}
      </ul>
    </Box>
  );
};

export default ProductsNavigation;
