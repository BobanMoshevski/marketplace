import { useRouteLoaderData } from "react-router-dom";
import PageHeading from "../../components/pageHeading/PageHeading";
import ProductDetailContent from "../../components/pageContents/productDetailContent/ProductDetailContent";

const ProductDetailPage = () => {
  const data = useRouteLoaderData("product-detail");

  return (
    <>
      {data !== null && <PageHeading pageTitle={"Product detail"} />}
      <ProductDetailContent />
    </>
  );
};

export default ProductDetailPage;
