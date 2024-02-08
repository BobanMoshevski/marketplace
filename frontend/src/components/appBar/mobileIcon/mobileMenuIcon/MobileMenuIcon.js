import { useState } from "react";
import { Box } from "@mui/material";
import MenuIconButton from "../menuIconButton/MenuIconButton";
import MobileDrawer from "../../drawer/mobileDrawer/MobileDrawer";

const MobileMenuIcon = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <Box sx={{ display: { xs: "flex", sm: "none" } }}>
      <MenuIconButton setIsDrawerOpen={setIsDrawerOpen} />

      <MobileDrawer
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
      />
    </Box>
  );
};

export default MobileMenuIcon;
