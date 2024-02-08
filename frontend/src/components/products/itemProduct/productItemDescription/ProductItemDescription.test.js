import { render, screen } from "@testing-library/react";
import ThemeContextProvider from "../../../../util/context/themeProvider/ThemeProvider";
import ProductItemDescription from "./ProductItemDescription";

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
  const data = {
    product: {
      description: "description",
      date: "2023-01-03",
      cost: "2",
      rating: "3",
    },
  };
  return render(<ProductItemDescription data={data} />, { wrapper });
};

describe("Product item description component", () => {
  test("render 'Description of product' heading", async () => {
    // Arrange
    customRender();

    // Act
    // do nothing

    // Assert
    const descriptionHeading = await screen.findByRole("heading", {
      name: "Description of product:",
    });
    expect(descriptionHeading).toBeInTheDocument();
  });

  test("render 'Description' heading", async () => {
    // Arrange
    customRender();

    // Act
    // do nothing

    // Assert
    const descriptionHeading = await screen.findByRole("heading", {
      name: "description",
    });
    expect(descriptionHeading).toBeInTheDocument();
  });

  test("render 'Date' paragraph", async () => {
    // Arrange
    customRender();

    // Act
    // do nothing

    // Assert
    const dateParagraph = await screen.findByText("Date: 2023-01-03");
    expect(dateParagraph).toBeInTheDocument();
  });

  test("render 'Price' heading", async () => {
    // Arrange
    customRender();

    // Act
    // do nothing

    // Assert
    const priceHeading = await screen.findByRole("heading", {
      name: "Price: 2",
    });
    expect(priceHeading).toBeInTheDocument();
  });

  test("render 'Rating' heading", async () => {
    // Arrange
    customRender();

    // Act
    // do nothing

    // Assert
    const ratingHeading = await screen.findByRole("heading", {
      name: "Rating: 3",
    });
    expect(ratingHeading).toBeInTheDocument();
  });
});
