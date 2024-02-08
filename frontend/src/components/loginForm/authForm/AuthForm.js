import { useContext, useState } from "react";
import { Form, useNavigation, useSearchParams } from "react-router-dom";
import { Box, Paper, TextField, Typography } from "@mui/material";
import FormName from "../formName/FormName";
import PasswordInput from "../passwordInput/PasswordInput";
import FormButtons from "../formButtons/FormButtons";
import { ThemeContext } from "../../../util/context/themeProvider/ThemeProvider";

const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showEmailErrorMessage, setShowEmailErrorMessage] = useState(false);
  const [showPasswordErrorMessage, setShowPasswordErrorMessage] =
    useState(false);
  const { isDark, modeDark, modeLight } = useContext(ThemeContext);
  const navigation = useNavigation();
  const [searchParams] = useSearchParams();
  const reg = /\S+@\S+\.\S+/;

  const loginFormTheme = isDark ? modeLight.dark : modeDark.light;
  const btnBgColorTheme = isDark ? modeDark.dark : modeLight.dark;
  const btnHoverBgColorTheme = !isDark ? modeDark.dark : modeLight.light;

  const isSubmitting = navigation.state === "submitting";
  const isLogin = searchParams.get("mode") === "login";
  const validFormBtn = password.length >= 6 && reg.test(email);
  const checkInputLength = password.length >= 6;

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="90vh"
    >
      <Paper elevation={24}>
        <Form
          method="post"
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            backgroundColor: loginFormTheme,
            minHeight: 300,
            padding: 35,
          }}
        >
          <FormName isLogin={isLogin} />

          <Box marginY={4} width="100%">
            <TextField
              fullWidth
              value={email}
              type="email"
              name="email"
              label="Email"
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
              onClick={() => setShowEmailErrorMessage(true)}
              required
            />
            {showEmailErrorMessage && !reg.test(email) && (
              <Typography variant="body1" color="#990202">
                Email is required!
              </Typography>
            )}
            {reg.test(email) && (
              <Typography variant="body1" color="#1b5e20">
                Email is valid!
              </Typography>
            )}
          </Box>

          <Box>
            <PasswordInput
              password={password}
              setPassword={setPassword}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
              setShowPasswordErrorMessage={setShowPasswordErrorMessage}
            />
            {showPasswordErrorMessage && !checkInputLength && (
              <Typography variant="body1" color="#990202">
                Password must have 6 characters!
              </Typography>
            )}

            {checkInputLength && (
              <Typography variant="body1" color="#1b5e20">
                Password have 6 characters!
              </Typography>
            )}
          </Box>

          <FormButtons
            validFormBtn={validFormBtn}
            btnHoverBgColorTheme={btnHoverBgColorTheme}
            btnBgColorTheme={btnBgColorTheme}
            isLogin={isLogin}
            isSubmitting={isSubmitting}
          />
        </Form>
      </Paper>
    </Box>
  );
};

export default AuthForm;
