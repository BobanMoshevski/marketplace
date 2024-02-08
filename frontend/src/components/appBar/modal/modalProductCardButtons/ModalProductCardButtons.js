import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Stack } from "@mui/material";
import { ProductsContext } from "../../../../util/context/productsProvider/ProductsProvider";
import { ThemeContext } from "../../../../util/context/themeProvider/ThemeProvider";
import CustomButton from "../../../customButton/CustomButton";

const ModalProductCardButtons = ({ productId, setIsOpenModal }) => {
  const { products, setProducts } = useContext(ProductsContext);
  const { isDark, modeDark, modeLight } = useContext(ThemeContext);

  const btnBgTheme = isDark ? modeDark.light : modeDark.light;
  const textTheme = isDark ? modeLight.light : modeDark.dark;
  const btnHoverTheme = isDark ? modeDark.dark : modeLight.dark;
  const borderTheme = !isDark ? modeLight.dark : modeDark.dark;
  const borderHoverTheme = isDark ? modeDark.light : modeDark.light;

  const removeProductCardHandler = (e) => {
    const filterProductsCard = products.filter(
      (productCard) => productCard.id !== e.target.id
    );
    setProducts(filterProductsCard);
    localStorage.setItem("cardProducts", JSON.stringify(filterProductsCard));
  };

  return (
    <Stack justifyContent="center" paddingY={2} direction="row">
      <NavLink style={{ textDecoration: "none" }} to={`/products/${productId}`}>
        <CustomButton
          title={"Read more"}
          variant={"outlined"}
          bgColor={btnBgTheme}
          textColor={textTheme}
          bgHover={btnHoverTheme}
          border={`2px solid ${borderTheme}`}
          borderHover={`2px solid ${borderHoverTheme}`}
          onClick={() => setIsOpenModal(false)}
        />
      </NavLink>

      <CustomButton
        title={"Remove of card"}
        id={productId}
        variant={"outlined"}
        bgColor={btnBgTheme}
        textColor={textTheme}
        bgHover={btnHoverTheme}
        border={`2px solid ${borderTheme}`}
        borderHover={`2px solid ${borderHoverTheme}`}
        onClick={removeProductCardHandler}
      />
    </Stack>
  );
};

export default ModalProductCardButtons;
