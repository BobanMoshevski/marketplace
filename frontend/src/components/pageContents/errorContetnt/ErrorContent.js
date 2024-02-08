import { Typography } from "@mui/material";

const ErrorContent = ({ title, message }) => {
  return (
    <>
      <Typography variant="h3" component="h2" marginY={2}>
        {title}
      </Typography>

      <Typography variant="h6" component="p">
        {message}
      </Typography>
    </>
  );
};

export default ErrorContent;
