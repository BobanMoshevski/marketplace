import { useContext } from "react";
import { Backdrop, Box, Fade, Modal } from "@mui/material";
import { ProductsContext } from "../../../../util/context/productsProvider/ProductsProvider";
import ModalProductsCard from "../modalProductsCard/ModalProductsCard";
import { style } from "./ModalContentStyle";
import { ThemeContext } from "../../../../util/context/themeProvider/ThemeProvider";

const ModalContent = ({ isOpenModal, setIsOpenModal }) => {
  const { products } = useContext(ProductsContext);
  const { isDark, modeDark, modeLight } = useContext(ThemeContext);
  const modalBgTheme = isDark ? modeDark.light : modeLight.light;

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={isOpenModal}
      onClose={() => setIsOpenModal(false)}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 1000,
      }}
    >
      <Fade in={isOpenModal}>
        <Box bgcolor={modalBgTheme} sx={style}>
          <ModalProductsCard
            setIsOpenModal={setIsOpenModal}
            products={products}
          />
        </Box>
      </Fade>
    </Modal>
  );
};

export default ModalContent;
