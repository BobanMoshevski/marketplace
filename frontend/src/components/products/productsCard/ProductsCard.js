import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ProductsSortingButtons from "../productsSortingButtons/ProductsSortingButtons";
import ProductsCardContent from "../productsCardContent/ProductsCardContent";

const ProductsCard = ({ products }) => {
  const [productsList, setProductsList] = useState(products);
  const [sortBy, setSortBy] = useState("");
  const [sliderValue, setSliderValue] = useState(0);
  const [resetSliderValue, setResetSliderValue] = useState(false);
  const history = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const checkPathName = location.pathname === "/products";
  const checkSearh = location.search === "";
  const isSortingAscending = queryParams.get("sort") === "asc";
  const isSortingDescending = queryParams.get("sort") === "desc";

  const sortProducts = productsList.sort((productA, productB) => {
    if (isSortingAscending) {
      if (sortBy === "title")
        return productA.title.toLowerCase() > productB.title.toLowerCase()
          ? 1
          : -1;
      if (sortBy === "cost") return productA.cost - productB.cost;
      if (sortBy === "rating") return productB.rating - productA.rating;
    }

    if (isSortingDescending) {
      if (sortBy === "title")
        return productA.title.toLowerCase() < productB.title.toLowerCase()
          ? 1
          : -1;
      if (sortBy === "cost") return productB.cost - productA.cost;
      if (sortBy === "rating") return productA.rating - productB.rating;
    }

    return 0;
  });

  const filterCost = useMemo(
    () => products.filter((product) => product.cost >= sliderValue),
    [products, sliderValue]
  );

  const filterRating = useMemo(
    () => products.filter((product) => product.rating >= sliderValue),
    [products, sliderValue]
  );

  useEffect(() => {
    if (checkSearh) {
      setProductsList(products);
    }

    if (sortBy === "" && !checkSearh) {
      setSliderValue(0);
      setProductsList(products);
      history({
        pathname: location.pathname,
        search: "",
      });
    }

    if (sortBy === "title" && !checkSearh) {
      setProductsList(sortProducts);
    }

    if (sortBy === "cost" && !checkSearh) {
      if (sliderValue !== 0 && !resetSliderValue) {
        setSliderValue(0);
        setResetSliderValue(true);
      }
      setProductsList(filterCost);
    }

    if (sortBy === "rating" && !checkSearh) {
      if (sliderValue !== 0 && resetSliderValue) {
        setSliderValue(0);
        setResetSliderValue(false);
      }
      setProductsList(filterRating);
    }
  }, [
    products,
    sortProducts,
    checkSearh,
    filterCost,
    filterRating,
    sliderValue,
    location.pathname,
    sortBy,
    resetSliderValue,
    setResetSliderValue,
    history,
  ]);

  return (
    <>
      {checkPathName && (
        <ProductsSortingButtons
          isSortingAscending={isSortingAscending}
          sortBy={sortBy}
          setSortBy={setSortBy}
          sliderValue={sliderValue}
          setSliderValue={setSliderValue}
          location={location}
          history={history}
        />
      )}

      <ProductsCardContent
        checkPathName={checkPathName}
        products={productsList}
      />
    </>
  );
};

export default ProductsCard;
