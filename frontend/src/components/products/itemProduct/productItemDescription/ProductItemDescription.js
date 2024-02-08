import { Box, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../../../../util/context/themeProvider/ThemeProvider";

const ProductItemDescription = ({ data }) => {
  const { isDark, modeDark } = useContext(ThemeContext);
  const textTheme = isDark ? modeDark.dark : "#fff";

  return (
    <Box
      sx={{
        maxWidth: { xs: "90%", sm: "70%" },
        marginX: "auto",
        marginY: 3,
        paddingY: 2,
        textAlign: "center",
        boxShadow: 4,
        color: textTheme,
      }}
    >
      <Typography variant="h5">Description of product:</Typography>
      <Typography variant="h6">{data.product.description}</Typography>
      <Typography variant="body2">Date: {data.product.date}</Typography>
      <Stack direction="row" justifyContent="center" spacing={3}>
        <Typography variant="h6">Price: {data.product.cost}</Typography>
        <Typography variant="h6">Rating: {data.product.rating}</Typography>
      </Stack>
    </Box>
  );
};

export default ProductItemDescription;
