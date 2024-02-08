import { render, screen } from "@testing-library/react";
import FormName from "./FormName";

describe("Form name component", () => {
  test("render 'Log in' heading of form name", () => {
    // Arrange
    const modeLight = {
      light: "white",
    };
    render(<FormName isLogin={true} modeLight={modeLight} />);

    // Act
    // do nothing

    // Assert
    const formNameHeading = screen.getByRole("heading", {
      name: "Log in",
    });
    expect(formNameHeading).toBeInTheDocument();
  });

  test("render 'Create a new user' heading of form name", () => {
    // Arrange
    const modeLight = {
      light: "white",
    };
    render(<FormName isLogin={false} modeLight={modeLight} />);

    // Act
    // do nothing

    // Assert
    const formNameHeading = screen.getByRole("heading", {
      name: "Create a new user",
    });
    expect(formNameHeading).toBeInTheDocument();
  });
});
