import { render, screen } from "@testing-library/react";
import ThemeContextProvider from "../../../../util/context/themeProvider/ThemeProvider";
import ModalProductCardContent from "./ModalProductCardContent";

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
  return render(<ModalProductCardContent product={product} />, { wrapper });
};

describe("Modal product card content component", () => {
  test("render product 'title'", async () => {
    // Arrange
    customRender();

    // Act
    // do nothing

    // Assert
    const productTitle = await screen.findByText("title");
    expect(productTitle).toBeInTheDocument();
  });

  test("render product 'price'", async () => {
    // Arrange
    customRender();

    // Act
    // do nothing

    // Assert
    const productCost = await screen.findByText("Price: 2");
    expect(productCost).toBeInTheDocument();
  });

  test("render product 'rating'", async () => {
    // Arrange
    customRender();

    // Act
    // do nothing

    // Assert
    const productRating = await screen.findByText("Rating: 3");
    expect(productRating).toBeInTheDocument();
  });
});
