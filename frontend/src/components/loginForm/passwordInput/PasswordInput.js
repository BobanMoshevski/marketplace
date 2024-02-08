import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const PasswordInput = ({
  password,
  setPassword,
  showPassword,
  setShowPassword,
  setShowPasswordErrorMessage,
}) => {
  return (
    <FormControl variant="outlined" fullWidth>
      <InputLabel htmlFor="outlined-password">Password</InputLabel>
      <OutlinedInput
        onClick={() => setShowPasswordErrorMessage(true)}
        value={password}
        name="password"
        id="outlined-password"
        type={showPassword ? "text" : "password"}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => setShowPassword((show) => !show)}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label="Password"
        required
        onChange={(e) => setPassword(e.target.value)}
      />
    </FormControl>
  );
};

export default PasswordInput;
