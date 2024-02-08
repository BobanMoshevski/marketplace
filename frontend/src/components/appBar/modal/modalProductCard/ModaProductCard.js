import { useContext } from "react";
import { Card, CardMedia } from "@mui/material";
import { ThemeContext } from "../../../../util/context/themeProvider/ThemeProvider";
import ModalProductCardContent from "../modalProductCardContent/ModalProductCardContent";
import ModalProductCardButtons from "../modalProductCardButtons/ModalProductCardButtons";

const ModalProductCard = ({ product, setIsOpenModal }) => {
  const { isDark, modeDark, modeLight } = useContext(ThemeContext);
  const cardBgColor = isDark ? modeDark.dark : modeLight.dark;

  return (
    <Card sx={{ bgcolor: cardBgColor, boxShadow: 20, marginY: 3 }}>
      <CardMedia
        sx={{ height: 200 }}
        image={product.image}
        title={product.title}
      />

      <ModalProductCardContent product={product} />

      <ModalProductCardButtons
        setIsOpenModal={setIsOpenModal}
        productId={product.id}
      />
    </Card>
  );
};

export default ModalProductCard;
