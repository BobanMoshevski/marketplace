import { useContext } from "react";
import { Card, CardMedia } from "@mui/material";
import { ThemeContext } from "../../../../util/context/themeProvider/ThemeProvider";
import ProductCardContent from "../productCardContent/ProductCardContent";

const ProductCard = ({ product }) => {
  const { isDark, modeDark, modeLight } = useContext(ThemeContext);
  const darkTheme = isDark ? modeDark.dark : modeLight.dark;

  return (
    <Card sx={{ bgcolor: darkTheme, boxShadow: 20 }}>
      <CardMedia
        sx={{ height: 200 }}
        image={product.image}
        title={product.title}
      />

      <ProductCardContent product={product} />
    </Card>
  );
};

export default ProductCard;
