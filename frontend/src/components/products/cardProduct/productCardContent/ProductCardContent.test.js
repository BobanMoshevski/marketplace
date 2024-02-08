import { render, screen } from "@testing-library/react";
import ThemeContextProvider from "../../../../util/context/themeProvider/ThemeProvider";
import ProductCardContent from "./ProductCardContent";

const wrapper = ({ children }) => {
  const theme = {
    isDark: true,
    modeDark: {
      dark: "dark",
      light: "white",
    },
    modeLight: {
      dark: "gray",
      light: "white",
    },
  };

  return <ThemeContextProvider value={theme}>{children}</ThemeContextProvider>;
};

const customRender = () => {
  const product = {
    title: "title",
    cost: "2",
    rating: "3",
  };
  return render(<ProductCardContent product={product} />, { wrapper });
};

describe("Product card content component", () => {
  test("render 'title' of product", async () => {
    // Arrange
    customRender();

    // Act
    // do nothing

    // Assert
    const productTitle = await screen.findByRole("heading", { name: "title" });
    expect(productTitle).toBeInTheDocument();
  });

  test("render 'cost' of product", async () => {
    // Arrange
    customRender();

    // Act
    // do nothing

    // Assert
    const productCost = await screen.findByText("Price: 2 €");
    expect(productCost).toBeInTheDocument();
  });

  test("render 'rating' of product", async () => {
    // Arrange
    customRender();

    // Act
    // do nothing

    // Assert
    const productRating = await screen.findByText("Rating: 3");
    expect(productRating).toBeInTheDocument();
  });
});
