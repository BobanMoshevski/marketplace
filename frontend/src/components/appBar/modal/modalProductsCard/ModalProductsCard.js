import { Box, IconButton, Typography } from "@mui/material";
import ModalProductCard from "../modalProductCard/ModaProductCard";
import CloseIcon from "@mui/icons-material/Close";

const ModalProductsCard = ({ products, setIsOpenModal }) => {
  const sumProductCost = products.reduce(
    (total, currentValue) =>
      (total = parseInt(total) + parseInt(currentValue.cost)),
    0
  );

  return (
    <>
      <Box display="flex" justifyContent="end">
        <IconButton onClick={() => setIsOpenModal(false)}>
          <CloseIcon />
        </IconButton>
      </Box>
      {products.length === 0 && (
        <Typography textAlign="center" variant="h5">
          No products in card
        </Typography>
      )}

      {products.length !== 0 && (
        <Typography variant="h6">
          Products total price: {sumProductCost}
        </Typography>
      )}

      {products.map((product) => (
        <ModalProductCard
          key={product.id}
          setIsOpenModal={setIsOpenModal}
          product={product}
        />
      ))}
    </>
  );
};

export default ModalProductsCard;
