import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";
import CustomButton from "../../customButton/CustomButton";

const FormButtons = ({
  validFormBtn,
  isLogin,
  isSubmitting,
  btnBgColorTheme,
  btnHoverBgColorTheme,
}) => {
  const loginBtnTitle = isLogin ? "Create new user" : "Login";

  return (
    <Box textAlign="center" marginTop={3}>
      <Link
        to={`?mode=${isLogin ? "signup" : "login"}`}
        style={{ textDecoration: "none" }}
      >
        <CustomButton
          title={loginBtnTitle}
          variant={"contained"}
          bgColor={btnBgColorTheme}
          textColor={btnHoverBgColorTheme}
          bgHover={btnHoverBgColorTheme}
          textHover={btnBgColorTheme}
        />
      </Link>

      <Button
        type="submit"
        sx={{
          textTransform: "none",
          bgcolor: btnBgColorTheme,
          color: btnHoverBgColorTheme,
          "&:hover": { bgcolor: btnHoverBgColorTheme, color: btnBgColorTheme },
        }}
        variant="contained"
        disabled={!validFormBtn ? true : isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Save"}
      </Button>
    </Box>
  );
};

export default FormButtons;
