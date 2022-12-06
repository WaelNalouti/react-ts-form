import { styled } from "@stitches/react";
import { violet } from "@radix-ui/colors";

const Fieldset = styled("fieldset", {
  all: "unset",
  display: "flex",
  gap: 10,
  alignItems: "center",
});

const Label = styled("label", {
  fontSize: 15,
  color: violet.violet11,
  textAlign: "right",
});

const Input = styled("input", {
  all: "unset",
  width: "100%",
  maxWidth: 450,
  flex: "1",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 4,
  padding: "0 10px",
  fontSize: 15,
  lineHeight: 1,
  color: violet.violet11,
  background: "#fff",
  boxShadow: `0 0 0 1px ${violet.violet7}`,
  height: 35,

  "&:focus": { boxShadow: `0 0 0 2px ${violet.violet8}` },
});

function InputField({
  label,
  id,
  placeholder,
  autoFocus,
}: {
  label: string;
  id: string;
  placeholder?: string;
  autoFocus?: boolean;
}) {
  return (
    <Fieldset>
      <Label htmlFor="name">{label}</Label>
      <Input id={id} placeholder={placeholder} autoFocus={autoFocus} />
    </Fieldset>
  );
}

export default InputField;
