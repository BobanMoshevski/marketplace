import { useRouteLoaderData } from "react-router-dom";
import { Box } from "@mui/material";
import ProductItemHeader from "../productItemHeader/ProductItemHeader";
import ProductItemDescription from "../productItemDescription/ProductItemDescription";
import ProductItemComments from "../productItemComments/ProductItemComments";

const ProductItem = () => {
  const data = useRouteLoaderData("product-detail");

  return (
    <>
      <Box boxShadow={4} marginTop={3} paddingBottom={2}>
        <ProductItemHeader data={data} />

        <ProductItemDescription data={data} />

        <ProductItemComments data={data} />
      </Box>
      <Box paddingTop={2}></Box>
    </>
  );
};

export default ProductItem;
