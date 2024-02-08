import { useContext } from "react";
import { Form, NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import { ThemeContext } from "../../../util/context/themeProvider/ThemeProvider";
import CustomButton from "../../customButton/CustomButton";

const LoginButton = ({ token }) => {
  const { isDark, modeDark, modeLight } = useContext(ThemeContext);
  const buttonBgColor = isDark ? modeLight.dark : modeDark.light;

  return (
    <>
      {!token && (
        <NavLink to="/auth?mode=login" style={{ textDecoration: "none" }}>
          <CustomButton
            title={"Login"}
            variant={"contained"}
            bgColor={buttonBgColor}
            textColor={"#fff"}
            bgHover={"#455a64"}
            textHover={modeLight.light}
          />
        </NavLink>
      )}

      {token && (
        <Form method="post" action="/logout">
          <Button
            type="submit"
            variant="contained"
            sx={{
              bgcolor: buttonBgColor,
              textTransform: "none",
              "&:hover": {
                bgcolor: "#455a64",
              },
            }}
          >
            Logout
          </Button>
        </Form>
      )}
    </>
  );
};

export default LoginButton;
