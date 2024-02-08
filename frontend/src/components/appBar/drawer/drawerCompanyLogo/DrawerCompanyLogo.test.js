import { render, screen } from "@testing-library/react";
import DrawerCompanyLogo from "./DrawerCompanyLogo";

describe("render drawer company logo", () => {
  test("render company logo", async () => {
    // Arrange
    render(<DrawerCompanyLogo />);

    // Act
    // do nothnig

    // Assert
    const companyLogoText = await screen.findByRole("heading", {
      name: "Marketplace",
    });
    expect(companyLogoText).toBeInTheDocument();
  });
});
