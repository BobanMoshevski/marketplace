import { useContext, useEffect, useState } from "react";
import {
  NavLink,
  useLocation,
  useRouteLoaderData,
  useSubmit,
} from "react-router-dom";
import { Stack } from "@mui/material";
import { ProductsContext } from "../../util/context/productsProvider/ProductsProvider";
import { ThemeContext } from "../../util/context/themeProvider/ThemeProvider";
import CustomButton from "../customButton/CustomButton";

const ButtonsGroup = () => {
  const [checkList, setCheckList] = useState(true);
  const data = useRouteLoaderData("product-detail");
  const location = useLocation();
  const { products, setProducts } = useContext(ProductsContext);
  const { isDark, modeDark, modeLight } = useContext(ThemeContext);
  const checkCardProducts = JSON.parse(localStorage.getItem("cardProducts"));
  const submit = useSubmit();

  const btnBgColorTheme = isDark ? modeLight.dark : modeDark.light;
  const btnHover = isDark ? modeLight.light : modeDark.dark;

  if (checkCardProducts !== null && checkList) {
    checkCardProducts.forEach((cardProduct) => {
      if (cardProduct.id === data.product.id) {
        setCheckList(false);
      }
    });
  }

  useEffect(() => {
    products.length === 0 && setCheckList(true);
    products.length && setCheckList(true);
  }, [products]);

  const manipulateCardProductBtn = () => {
    const [filterProductId] = products.filter(
      (product) => product.id === data.product.id
    );
    const filterProducts = products.filter(
      (product) => product.id !== data.product.id
    );
    let cardProducts = [];

    if (checkCardProducts === null) {
      cardProducts.push(data.product);
      setProducts(data.product);
      localStorage.setItem("cardProducts", JSON.stringify(cardProducts));
    }

    if (filterProductId === undefined) {
      filterProducts.push(data.product);
      setProducts(filterProducts);
      setCheckList(true);
      localStorage.setItem("cardProducts", JSON.stringify(filterProducts));
    } else {
      setProducts(filterProducts);
      setCheckList(true);
      localStorage.setItem("cardProducts", JSON.stringify(filterProducts));
    }
  };

  const deleteHandler = () => {
    const proceed = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (proceed) {
      submit(null, { method: "delete" });
    }
  };

  return (
    <Stack direction="row" justifyContent="center" marginTop={4}>
      <CustomButton
        title={checkList ? "Add to card" : "Remove of card"}
        variant="contained"
        bgColor={btnBgColorTheme}
        bgHover={btnHover}
        textHover={btnBgColorTheme}
        onClick={manipulateCardProductBtn}
      />

      <NavLink
        style={{ textDecoration: "none" }}
        to={`${location.pathname}/edit`}
      >
        <CustomButton
          title={"Edit product"}
          variant="contained"
          bgColor={btnBgColorTheme}
          bgHover={btnHover}
          textHover={btnBgColorTheme}
        />
      </NavLink>

      <CustomButton
        title={"Delete product"}
        variant="contained"
        bgColor={btnBgColorTheme}
        bgHover={btnHover}
        textHover={btnBgColorTheme}
        onClick={deleteHandler}
      />
    </Stack>
  );
};

export default ButtonsGroup;
