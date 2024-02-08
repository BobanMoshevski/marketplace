import PageHeading from "../../pageHeading/PageHeading";
import ProductsForm from "../../products/productsForm/ProductsForm";

const EditProductContent = ({ data }) => {
  return (
    <>
      <PageHeading pageTitle={"Edit product"} />
      <ProductsForm method={"patch"} product={data} />
    </>
  );
};

export default EditProductContent;
