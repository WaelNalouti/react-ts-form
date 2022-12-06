import { styled } from "@stitches/react";
import { green, mauve } from "@radix-ui/colors";

const Button = styled("button", {
  all: "unset",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 4,
  padding: "0 15px",
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
  height: 35,
  backgroundColor: green.green4,
  color: green.green11,
  cursor: "pointer",
  "&:hover": { backgroundColor: green.green5 },
  "&:focus": { boxShadow: `0 0 0 2px ${green.green7}` },
});

const FormButton = ({
  type,
  text,
  style,
  onClick,
  disabled,
}: {
  type: "button" | "submit";
  text: string;
  style?: {};
  onClick?: () => void;
  disabled?: boolean;
}) => {
  return (
    <Button
      type={type}
      style={
        disabled
          ? { backgroundColor: mauve.mauve6, cursor: "not-allowed", ...style }
          : { ...style }
      }
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </Button>
  );
};
export default FormButton;
