import { render, screen } from "@testing-library/react";
import ModalProductsCard from "./ModalProductsCard";

describe("Modal products card component", () => {
  test("render 'No products in card' if array is empty", () => {
    // Arrange
    const products = [];
    render(<ModalProductsCard products={products} />);

    // Act
    // do nothing

    // Assert
    const emptyArrayText = screen.getByRole("heading", {
      name: "No products in card",
    });
    expect(emptyArrayText).toBeInTheDocument();
  });
});
