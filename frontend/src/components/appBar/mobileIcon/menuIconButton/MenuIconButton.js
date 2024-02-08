import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const MenuIconButton = ({ setIsDrawerOpen }) => {
  return (
    <>
      <IconButton
        onClick={() => setIsDrawerOpen(true)}
        size="large"
        edge="start"
        color="inherit"
        aria-label="logo"
        sx={{ padding: "8px", "&:hover": { bgcolor: "#455a64" } }}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default MenuIconButton;
