import { NavLink } from "react-router-dom";
import { Grid } from "@mui/material";
import ProductCard from "../cardProduct/productCard/ProductCard";

const ProductsCardContent = ({ products, checkPathName }) => {
  return (
    <Grid container spacing={3} paddingY="50px" justifyContent="center">
      {products.map((product) => (
        <Grid key={product.id} item xs={12} sm={6} md={4}>
          <NavLink
            style={{ textDecoration: "none" }}
            to={checkPathName ? product.id : `/products/${product.id}`}
          >
            <ProductCard product={product} />
          </NavLink>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductsCardContent;
