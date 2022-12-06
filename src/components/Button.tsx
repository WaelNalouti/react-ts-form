import { styled } from "@stitches/react";
import { green } from "@radix-ui/colors";

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
}: {
  type: "button" | "submit";
  text: string;
  style?: {};
}) => {
  return (
    <Button type={type} style={style}>
      {text}
    </Button>
  );
};
export default FormButton;
