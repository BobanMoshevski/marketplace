import { render, screen } from "@testing-library/react";
import ThemeContextProvider from "../../util/context/themeProvider/ThemeProvider";
import PageHeading from "./PageHeading";

describe("Page heading component", () => {
  test("rednder 'page heading'", () => {
    // Arrange
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
    render(<PageHeading pageTitle={"Page title"} />, { wrapper });

    // Act
    // do nothing

    // Arrange
    const titlePage = screen.getByText("Page title").textContent;
    expect(titlePage).toBe("Page title");
  });
});
