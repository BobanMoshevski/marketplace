import { useContext } from "react";
import { Box, CardContent, Typography } from "@mui/material";
import { ThemeContext } from "../../../../util/context/themeProvider/ThemeProvider";

const ModalProductCardContent = ({ product }) => {
  const { isDark, modeDark, modeLight } = useContext(ThemeContext);
  const textColorTheme = isDark ? modeLight.light : modeDark.dark;

  return (
    <CardContent>
      <Typography
        borderBottom={`2px solid ${textColorTheme}`}
        color={textColorTheme}
        textAlign="center"
        gutterBottom
        variant="h5"
        component="div"
      >
        {product.title}
      </Typography>
      <Box display="flex" justifyContent="space-around" color={textColorTheme}>
        <Typography variant="body2">Price: {product.cost}</Typography>

        <Typography variant="body2">Rating: {product.rating}</Typography>
      </Box>
    </CardContent>
  );
};

export default ModalProductCardContent;
