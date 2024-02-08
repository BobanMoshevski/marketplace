import { useContext } from "react";
import { Box, Drawer } from "@mui/material";
import { ThemeContext } from "../../../../util/context/themeProvider/ThemeProvider";
import MenuIconDrawer from "../menuIconDrawer/MenuIconDrawer";

const MobileDrawer = ({ setIsDrawerOpen, isDrawerOpen }) => {
  const { isDark, modeDark, modeLight } = useContext(ThemeContext);
  const drawerBgColor = isDark ? modeDark.light : modeLight.dark;

  return (
    <>
      <Drawer
        anchor="top"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box
          bgcolor={drawerBgColor}
          p={2}
          role="presentation"
          textAlign="center"
        >
          <MenuIconDrawer setIsDrawerOpen={setIsDrawerOpen} />
        </Box>
      </Drawer>
    </>
  );
};

export default MobileDrawer;
