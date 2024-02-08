import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ThemeContextProvider from "../../../../util/context/themeProvider/ThemeProvider";
import ProductItemHeader from "./ProductItemHeader";

describe("Product item header component", () => {
  test("render product title", async () => {
    // Arrange
    const data = {
      product: {
        title: "title",
      },
    };

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

    const wrapper = ({ children }) => (
      <ThemeContextProvider value={theme}>{children}</ThemeContextProvider>
    );

    render(<ProductItemHeader data={data} />, { wrapper });

    // Act
    // do notghing

    // Assert
    const productTitle = await screen.findByRole("heading", {
      name: data.product.title,
    });
    expect(productTitle).toBeInTheDocument();
  });

  test("render 'alternate text for an area'", async () => {
    // Arrange
    const data = {
      product: {
        title: "title",
      },
    };

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

    const wrapper = ({ children }) => (
      <ThemeContextProvider value={theme}>{children}</ThemeContextProvider>
    );

    render(<ProductItemHeader data={data} />, { wrapper });

    // Act
    // do notghing

    // Assert
    const productImg = await screen.findByRole("img");
    expect(productImg).toHaveAttribute("alt", data.product.title);
  });

  test("render 'URL of the media file'", async () => {
    // Arrange
    const data = {
      product: {
        image:
          "https://images.everydayhealth.com/images/apples-101-about-1440x810.jpg",
      },
    };

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

    const wrapper = ({ children }) => (
      <ThemeContextProvider value={theme}>{children}</ThemeContextProvider>
    );

    render(<ProductItemHeader data={data} />, { wrapper });

    // Act
    // do notghing

    // Assert
    const productImg = await screen.findByRole("img");
    expect(productImg).toHaveAttribute("src", data.product.image);
  });
});
