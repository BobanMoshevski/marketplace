import { render, screen } from "@testing-library/react";
import CustomButton from "./CustomButton";

describe("Custom button component", () => {
  test("render custom btn", async () => {
    // Arrange
    render(<CustomButton title={"title"} />);

    // Act
    // do nothing

    // Assert
    const customBtn = await screen.findByRole("button", { name: "title" });
    expect(customBtn).toBeInTheDocument();
  });
});
