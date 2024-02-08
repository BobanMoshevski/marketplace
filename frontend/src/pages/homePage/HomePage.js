import { useLoaderData } from "react-router-dom";
import PageHeading from "../../components/pageHeading/PageHeading";
import HomeContent from "../../components/pageContents/homeContent/HomeContent";

const HomePage = () => {
  const data = useLoaderData();
  const pageTitle = "Our top three products by rating";
  const topProducts = data.products.sort((a, b) => b.rating - a.rating);
  const filterProducts = topProducts.filter((product, index) => index + 1 <= 3);

  return (
    <>
      {filterProducts.length !== 0 && <PageHeading pageTitle={pageTitle} />}

      <HomeContent filterProducts={filterProducts} />
    </>
  );
};

export default HomePage;
