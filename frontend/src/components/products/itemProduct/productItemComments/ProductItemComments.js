import { Box, Stack, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { Form, useSubmit } from "react-router-dom";
import { ThemeContext } from "../../../../util/context/themeProvider/ThemeProvider";
import { getAuthToken } from "../../../../util/http/loader/loader";
import CustomButton from "../../../customButton/CustomButton";
import { CssTextField } from "../../productsForm/ProductsFormStyle";

const ProductItemComments = ({ data }) => {
  const [message, setMessage] = useState("");
  const { isDark, modeDark, modeLight } = useContext(ThemeContext);
  const token = getAuthToken();
  const submit = useSubmit();
  const textTheme = isDark ? modeDark.dark : "#fff";
  const btnTheme = isDark ? modeDark.dark : modeDark.light;
  const hoverBtnTheme = isDark ? modeLight.dark : modeLight.dark;

  const submitHandle = () => {
    submit({ message }, { method: "post" });
    setMessage("");
  };

  return (
    <Box
      sx={{
        maxWidth: { xs: "90%", sm: "70%" },
        marginX: "auto",
        paddingY: 1,
        boxShadow: 4,
        marginTop: 3,
        textAlign: "center",
        color: textTheme,
      }}
    >
      <Typography marginTop={3} textAlign="center" variant="h5">
        Comments:
      </Typography>

      {token && (
        <Form method="post">
          <Box width="80%" marginX="auto">
            <CssTextField
              value={message}
              name="message"
              fullWidth
              multiline
              minRows={2}
              onChange={(e) => setMessage(e.target.value)}
            />
          </Box>
          <CustomButton
            title="Save"
            variant="contained"
            bgColor={btnTheme}
            bgHover={hoverBtnTheme}
            onClick={submitHandle}
            disabled={message.length === 0 ? true : false}
          />
        </Form>
      )}

      {data.product.comments.map((comment, index) => (
        <Stack
          key={index}
          direction="column"
          alignItems="center"
          marginY={3}
          marginX="auto"
          paddingY={2}
          boxShadow={3}
          width="90%"
        >
          <Typography variant="body1">Email: {comment.email}</Typography>
          <Typography variant="body1">Comment: {comment.text}</Typography>
        </Stack>
      ))}
    </Box>
  );
};

export default ProductItemComments;
