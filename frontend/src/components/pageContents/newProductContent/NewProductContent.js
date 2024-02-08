import PageHeading from "../../pageHeading/PageHeading";
import ProductsForm from "../../products/productsForm/ProductsForm";

const NewProductContent = () => {
  return (
    <>
      <PageHeading pageTitle={"Add new product"} />
      <ProductsForm method={"post"} />
    </>
  );
};

export default NewProductContent;
