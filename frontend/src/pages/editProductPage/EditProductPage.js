import { useRouteLoaderData } from "react-router-dom";
import EditProductContent from "../../components/pageContents/editProductContent/EditProductContent";

const EditProductPage = () => {
  const data = useRouteLoaderData("product-detail");

  return <EditProductContent data={data.product} />;
};

export default EditProductPage;
