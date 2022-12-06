import FormButton from "./Button";
import InputField from "./InputField";
import SelectField from "./SelectField";
import { styled } from "@stitches/react";
import { mauve } from "@radix-ui/colors";

const StyledForm = styled("form", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: 50,
  padding: 30,
  width: "100%",
  maxWidth: "90vw",
  border: `1px dashed ${mauve.mauve7}`,
  borderRadius: 7,
  minHeight: "calc(100vh - 80px)",
  position: "relative",
});

const TopSection = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 10,
  width: "100%",
});

const CountryFormContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: 50,
  flexWrap: "wrap",
  padding: 30,
  width: "100%",
  border: `1px dashed  ${mauve.mauve7}`,
  borderRadius: 7,
  backgroundColor: mauve.mauve2,
});

function Form() {
  return (
    <StyledForm>
      <TopSection>
        <InputField label="Shipping line name" id="name" autoFocus />
        <FormButton type="button" text="Add country" />
      </TopSection>

      <CountryFormContainer>
        <SelectField />
        <InputField id="cost" label="Cost" />
        <InputField id="minDays" label="Min days" />
        <InputField id="maxDays" label="Max days" />
      </CountryFormContainer>
      <FormButton
        type="submit"
        text="Save data"
        style={{ position: "absolute", bottom: 20, right: 20, width: 100 }}
      />
    </StyledForm>
  );
}

export default Form;
