import { useRouteLoaderData } from "react-router-dom";
import PageHeading from "../../components/pageHeading/PageHeading";
import ProductsContent from "../../components/pageContents/productsContent/ProductsContent";

const ProductsPage = () => {
  const data = useRouteLoaderData("products");
  const pageTitle = "All products";

  return (
    <>
      {data.products.legnth !== 0 && <PageHeading pageTitle={pageTitle} />}

      <ProductsContent products={data.products} />
    </>
  );
};

export default ProductsPage;
