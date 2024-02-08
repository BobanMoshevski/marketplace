import { createContext, useState } from "react";

export const ProductsContext = createContext();

const ProductsContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [getItem, setGetItem] = useState(true);
  const getItemLocalStorage = JSON.parse(localStorage.getItem("cardProducts"));

  if (getItemLocalStorage !== null && getItem) {
    setGetItem(false);
    setProducts(getItemLocalStorage);
  }

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
