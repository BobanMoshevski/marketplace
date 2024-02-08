import { useContext } from "react";
import { Box, Slider } from "@mui/material";
import { ThemeContext } from "../../../util/context/themeProvider/ThemeProvider";

const RangeSlider = ({ sliderValue, setSliderValue, sortBy }) => {
  const { isDark, modeDark, modeLight } = useContext(ThemeContext);
  const sliderTheme = isDark ? modeLight.dark : modeDark.light;

  const marks = [
    {
      value: 0,
      label: sortBy === "rating" ? "0" : "0 €",
    },
    {
      value: sortBy === "rating" ? 5 : 100,
      label: sortBy === "rating" ? "5" : "100 €",
    },
  ];

  return (
    <Box sx={{ minWidth: 260, marginTop: 3 }}>
      <Slider
        sx={{ color: sliderTheme }}
        value={sliderValue}
        max={sortBy === "rating" ? 5 : 100}
        min={sortBy === "rating" ? 0 : 0}
        aria-label="Custom range slider"
        defaultValue={0}
        step={1}
        valueLabelDisplay="auto"
        marks={marks}
        onChange={(e) => setSliderValue(e.target.value)}
      />
    </Box>
  );
};

export default RangeSlider;
