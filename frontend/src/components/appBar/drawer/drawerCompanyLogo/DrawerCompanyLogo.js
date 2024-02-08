import { Box, Typography } from "@mui/material";
import StoreIcon from "@mui/icons-material/Store";

const DrawerCompanyLogo = () => {
  return (
    <Box
      color={"#fff"}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <StoreIcon sx={{ fontSize: "40px" }} />

      <Typography
        variant="h5"
        sx={{
          fontFamily: "monospace",
          fontWeight: 700,
        }}
      >
        Marketplace
      </Typography>
    </Box>
  );
};

export default DrawerCompanyLogo;
