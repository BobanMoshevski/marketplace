import { Outlet } from "react-router-dom";
import ProductsNavigation from "../../components/navigations/productsNavigation/ProductsNavigation";

const ProductsRootLayout = () => {
  return (
    <>
      <ProductsNavigation />
      <Outlet />
    </>
  );
};

export default ProductsRootLayout;
