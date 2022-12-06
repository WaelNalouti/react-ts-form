import { styled } from "@stitches/react";
import { tomato, violet } from "@radix-ui/colors";

const Fieldset = styled("fieldset", {
  all: "unset",
  display: "flex",
  gap: 10,
  alignItems: "center",
});

const Label = styled("label", {
  fontSize: 15,
  fontWeight: 600,
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
  onChange,
  value,
  type,
  error,
  name,
}: {
  label: string;
  id: string;
  placeholder?: string;
  autoFocus?: boolean;
  onChange: any;
  value: any;
  type?: "text" | "number";
  error: boolean;
  name: any;
}) {
  return (
    <Fieldset>
      <Label htmlFor="name">{label}</Label>
      <Input
        onChange={onChange}
        value={value}
        id={id}
        name={name}
        placeholder={placeholder}
        type={type}
        autoFocus={autoFocus}
        style={
          error ? { borderColor: tomato.tomato10, color: tomato.tomato10 } : {}
        }
      />
    </Fieldset>
  );
}

export default InputField;
