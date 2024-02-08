import { useContext } from "react";
import { Form, useNavigate, useNavigation } from "react-router-dom";
import { Box, Stack } from "@mui/material";
import { ThemeContext } from "../../../util/context/themeProvider/ThemeProvider";
import CustomButton from "../../customButton/CustomButton";
import { CssTextField } from "./ProductsFormStyle";

const ProductsForm = ({ method, product }) => {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const { isDark, modeDark, modeLight } = useContext(ThemeContext);
  const btnBgTheme = isDark ? modeLight.dark : modeDark.light;
  const btnTextTheme = isDark ? modeDark.dark : "#fff";

  const isSubmitting = navigation.state === "submitting";

  const cancelHandler = () => {
    navigate("..");
  };

  return (
    <Box
      sx={{
        maxWidth: { xs: "90%", sm: "50%" },
        margin: "4px auto",
        boxShadow: 6,
        padding: 4,
      }}
    >
      <Form method={method}>
        <CssTextField
          label="Product title"
          id="title"
          type="text"
          name="title"
          fullWidth
          required
          defaultValue={product ? product.title : ""}
        />

        <CssTextField
          label="Product image"
          id="image"
          type="url"
          name="image"
          fullWidth
          required
          defaultValue={product ? product.image : ""}
        />

        <CssTextField
          label={product ? "Date" : ""}
          id="date"
          type="date"
          name="date"
          fullWidth
          required
          defaultValue={product ? product.date : ""}
        />
        <CssTextField
          label="Product description"
          id="description"
          type="text"
          name="description"
          fullWidth
          required
          defaultValue={product ? product.description : ""}
        />

        <CssTextField
          label="Product cost"
          id="cost"
          type="number"
          name="cost"
          fullWidth
          required
          defaultValue={product ? product.cost : ""}
        />

        <CssTextField
          label="Rating"
          id="rating"
          type="number"
          name="rating"
          fullWidth
          required
          defaultValue={product ? product.rating : ""}
        />

        <Stack direction="row" justifyContent="center">
          <CustomButton
            title="Cancel"
            variant="contained"
            onClick={cancelHandler}
            bgColor={btnBgTheme}
            textColor={btnTextTheme}
            bgHover={btnTextTheme}
            textHover={btnBgTheme}
          />

          <CustomButton
            type={"submit"}
            disabled={isSubmitting}
            title={isSubmitting ? "Submitting..." : "Save"}
            variant="contained"
            bgColor={btnBgTheme}
            textColor={btnTextTheme}
            bgHover={btnTextTheme}
            textHover={btnBgTheme}
          />
        </Stack>
      </Form>
    </Box>
  );
};

export default ProductsForm;
