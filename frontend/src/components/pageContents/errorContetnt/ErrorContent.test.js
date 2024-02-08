import { render, screen } from "@testing-library/react";
import ErrorContent from "./ErrorContent";

describe("Error content", () => {
  test("render error 'title'", async () => {
    // Arrange
    const title = "title";
    render(<ErrorContent title={title} />);

    // Act
    // do nothing

    // Assert
    const titleHeading = await screen.findByRole("heading", {
      name: "title",
    });
    expect(titleHeading).toBeInTheDocument();
  });

  test("render error 'message'", async () => {
    // Arrange
    const message = "message";
    render(<ErrorContent message={message} />);

    // Act
    // do nothing

    // Assert
    const messageHeading = await screen.findByText("message");
    expect(messageHeading).toBeInTheDocument();
  });
});
