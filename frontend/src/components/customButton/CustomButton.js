import { Button } from "@mui/material";

const CustomButton = ({
  title,
  variant,
  bgColor,
  textColor,
  bgHover,
  textHover,
  border,
  borderHover,
  onClick,
  id,
  type,
  disabled,
}) => {
  return (
    <Button
      disabled={disabled}
      type={type}
      id={id}
      sx={{
        margin: 1,
        textTransform: "none",
        bgcolor: bgColor,
        color: textColor,
        border: border,
        "&:hover": {
          bgcolor: bgHover,
          color: textHover,
          border: borderHover,
        },
      }}
      variant={variant}
      onClick={onClick}
    >
      {title}
    </Button>
  );
};

export default CustomButton;
