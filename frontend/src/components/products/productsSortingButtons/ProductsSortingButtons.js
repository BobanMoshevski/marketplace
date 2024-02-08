import { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { ThemeContext } from "../../../util/context/themeProvider/ThemeProvider";
import SelectProductsSort from "../selectProductsSort/SelectProductsSort";
import RangeSlider from "../rangeSlider/RangeSlider";
import CustomButton from "../../customButton/CustomButton";

const ProductsSortingButtons = ({
  isSortingAscending,
  sortBy,
  setSortBy,
  sliderValue,
  setSliderValue,
  location,
  history,
}) => {
  const { isDark, modeDark, modeLight } = useContext(ThemeContext);
  const btnBgTheme = isDark ? modeLight.dark : modeDark.light;
  const btnHoverTheme = isDark ? modeDark.dark : modeLight.dark;
  const sortHeadingColor = isDark ? modeDark.dark : "#fff";
  const checkSort = sortBy === "cost" || sortBy === "rating";
  const btnSortTitle = isSortingAscending ? "descending" : "ascending";

  const changeSorting = () => {
    history({
      pathname: location.pathname,
      search: `?sort=${isSortingAscending ? "desc" : "asc"}`,
    });
  };

  return (
    <Box
      marginTop={5}
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Typography variant="h6" marginBottom={2} color={sortHeadingColor}>
        Sort products
      </Typography>

      <Box display="flex">
        <SelectProductsSort setSortBy={setSortBy} />
        <CustomButton
          title={`Sort ${btnSortTitle}`}
          variant={"contained"}
          bgColor={btnBgTheme}
          bgHover={btnHoverTheme}
          onClick={changeSorting}
        />
      </Box>

      {checkSort && (
        <RangeSlider
          sortBy={sortBy}
          sliderValue={sliderValue}
          setSliderValue={setSliderValue}
        />
      )}
    </Box>
  );
};

export default ProductsSortingButtons;
