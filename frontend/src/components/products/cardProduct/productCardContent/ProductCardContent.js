import { useContext } from "react";
import { Box, CardContent, Typography } from "@mui/material";
import { ThemeContext } from "../../../../util/context/themeProvider/ThemeProvider";

const ProductCardContent = ({ product }) => {
  const { isDark, modeDark, modeLight } = useContext(ThemeContext);
  const titleColor = isDark ? modeLight.light : modeDark.dark;

  return (
    <CardContent>
      <Typography
        borderBottom={`2px solid ${titleColor}`}
        color={titleColor}
        textAlign="center"
        gutterBottom
        variant="h5"
        component="h3"
      >
        {product.title}
      </Typography>

      <Box
        display="flex"
        justifyContent="space-around"
        color={titleColor}
        paddingTop="10px"
      >
        <Typography variant="body2">Price: {product.cost} €</Typography>

        <Typography variant="body2">Rating: {product.rating}</Typography>
      </Box>
    </CardContent>
  );
};

export default ProductCardContent;
