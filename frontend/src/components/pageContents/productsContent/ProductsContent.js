import LoadProgress from "../../loadProgress/LoadProgress";
import ProductsCard from "../../products/productsCard/ProductsCard";

const ProductsContent = ({ products }) => {
  return (
    <>
      {products.length === 0 && <LoadProgress />}

      {products.length !== 0 && <ProductsCard products={products} />}
    </>
  );
};

export default ProductsContent;
