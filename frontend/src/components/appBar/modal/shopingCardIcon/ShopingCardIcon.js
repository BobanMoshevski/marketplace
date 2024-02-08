import { useContext } from "react";
import { Badge, IconButton } from "@mui/material";
import { ProductsContext } from "../../../../util/context/productsProvider/ProductsProvider";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const ShopingCardIcon = ({ setIsOpenModal }) => {
  const { products } = useContext(ProductsContext);

  return (
    <IconButton
      onClick={() => setIsOpenModal(true)}
      sx={{
        color: "inherit",
        "&:hover": { bgcolor: "#455a64" },
      }}
    >
      <Badge badgeContent={products.length} color="error">
        <AddShoppingCartIcon />
      </Badge>
    </IconButton>
  );
};

export default ShopingCardIcon;
