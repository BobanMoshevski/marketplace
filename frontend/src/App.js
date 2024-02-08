import { RouterProvider } from "react-router-dom";
import ThemeContextProvider from "./util/context/themeProvider/ThemeProvider";
import ProductsContextProvider from "./util/context/productsProvider/ProductsProvider";
import { router } from "./util/routes/router";

function App() {
  return (
    <ThemeContextProvider>
      <ProductsContextProvider>
        <RouterProvider router={router} />
      </ProductsContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
