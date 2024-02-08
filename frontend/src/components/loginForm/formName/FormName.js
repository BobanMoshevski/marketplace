import { Typography } from "@mui/material";

const FormName = ({ isLogin }) => {
  return (
    <Typography color={"#fff"} textAlign="center" variant="h4">
      {isLogin ? "Log in" : "Create a new user"}
    </Typography>
  );
};

export default FormName;
