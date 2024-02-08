import { Box } from "@mui/material";
import DrawerCompanyLogo from "../drawerCompanyLogo/DrawerCompanyLogo";
import DrawerLinks from "../drawerLinks/DrawerLinks";

const MenuIconDrawer = ({ setIsDrawerOpen }) => {
  return (
    <Box flexDirection="column">
      <DrawerCompanyLogo />

      <DrawerLinks setIsDrawerOpen={setIsDrawerOpen} />
    </Box>
  );
};

export default MenuIconDrawer;
