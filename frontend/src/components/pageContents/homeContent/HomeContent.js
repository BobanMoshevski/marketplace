import LoadProgress from "../../loadProgress/LoadProgress";
import ProductsCard from "../../products/productsCard/ProductsCard";

const HomeContent = ({ filterProducts }) => {
  return (
    <>
      {filterProducts.length === 0 && <LoadProgress />}

      {filterProducts.length !== 0 && (
        <ProductsCard products={filterProducts} />
      )}
    </>
  );
};

export default HomeContent;
