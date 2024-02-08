import { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { ThemeContext } from "../../../../util/context/themeProvider/ThemeProvider";

const ProductItemHeader = ({ data }) => {
  const { isDark, modeDark } = useContext(ThemeContext);
  const headerTextTheme = isDark ? modeDark.dark : "#fff";

  return (
    <Box
      sx={{
        width: { sm: "70%" },
        textAlign: "center",
        marginX: "auto",
      }}
    >
      <Typography
        variant="h4"
        sx={{ marginBottom: 3, paddingTop: 2, color: headerTextTheme }}
      >
        {data.product.title}
      </Typography>

      <img
        src={data.product.image}
        alt={data.product.title}
        height="100%"
        width="100%"
      />
    </Box>
  );
};

export default ProductItemHeader;
