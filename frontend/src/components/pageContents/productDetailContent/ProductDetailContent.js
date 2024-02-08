import { useRouteLoaderData } from "react-router-dom";
import ButtonsGroup from "../../buttonsGroup/ButtonsGroup";
import ProductItem from "../../products/itemProduct/productItem/ProductItem";

const ProductDetailContent = () => {
  const token = useRouteLoaderData("root");

  return (
    <>
      {token && <ButtonsGroup />}
      <ProductItem />
    </>
  );
};

export default ProductDetailContent;
