import FormButton from "./Button";
import InputField from "./InputField";
import { styled } from "@stitches/react";
import { blackA, mauve, tomato, violet } from "@radix-ui/colors";
import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import { formValidationSchema } from "../utils/formValidationSchema";
import useCountries from "../utils/useCountries";

const initialValues: FormValues = {
  shippingName: "",
  countries: [
    {
      name: "",
      cost: 0,
      maxDays: 0,
      minDays: 0,
    },
  ],
};

export default function CountriesForm() {
  const { countriesList } = useCountries();
  const handleSubmit = (values: FormValues) => {
    let countriesArr = values.countries;

    let countries: {
      [name: string]: {
        cost: number;
        minDays: number;
        maxDays: number;
      };
    } = {};

    countriesArr.forEach((cntry) => {
      countries[cntry.name] = {
        cost: cntry.cost,
        minDays: cntry.minDays,
        maxDays: cntry.maxDays,
      };
    });

    const dataToBeSentToDB: IDBdata = {
      name: values.shippingName,
      countries,
    };

    console.log(dataToBeSentToDB);
    return dataToBeSentToDB;
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={formValidationSchema}
      onSubmit={(values: FormValues, actions) => {
        handleSubmit(values);
        // Mocking network request on form submit
        setTimeout(() => {
          actions.setSubmitting(false);
        }, 2000);
      }}
    >
      {({ values, isSubmitting }) => (
        <StyledForm style={isSubmitting ? { opacity: 0.7 } : {}}>
          <TopSection>
            <Field
              as={InputField}
              label="Shipping line name"
              id="shippingName"
              name="shippingName"
              autoFocus
            />
            <div style={{ color: tomato.tomato10, padding: 10 }}>
              <ErrorMessage name="shippingName" component="pre" />
            </div>
          </TopSection>
          <FieldArray name="countries">
            {({ push, remove }) => (
              <div>
                <FormButton
                  type="button"
                  text="Add country"
                  onClick={() => {
                    push({ name: "", cost: 0, maxDays: 0, minDays: 0 });
                  }}
                />
                {values.countries.map((country, _idx) => (
                  <CountryFormContainer key={_idx}>
                    <div>
                      {countriesList && (
                        <Fieldset>
                          <Label>Select a country</Label>
                          <Field
                            as={Select}
                            id="Country"
                            name={`countries.${_idx}.name`}
                          >
                            <option value={""}>Select a country</option>
                            {countriesList.map((countryData, idx) => (
                              <option key={idx} value={countryData.name}>
                                {countryData.name}
                              </option>
                            ))}
                          </Field>
                        </Fieldset>
                      )}
                      <div style={{ color: tomato.tomato10, padding: 10 }}>
                        <ErrorMessage
                          name={`countries.${_idx}.name`}
                          component="pre"
                        />
                      </div>
                    </div>
                    <div>
                      <Field
                        as={InputField}
                        id="cost"
                        name={`countries.${_idx}.cost`}
                        label="Cost"
                        type="number"
                      />
                      <div style={{ color: tomato.tomato10, padding: 10 }}>
                        <ErrorMessage
                          name={`countries.${_idx}.cost`}
                          component="pre"
                        />
                      </div>
                    </div>
                    <div>
                      <Field
                        as={InputField}
                        id="minDays"
                        name={`countries.${_idx}.minDays`}
                        label="Min days"
                        type="number"
                      />

                      <div style={{ color: tomato.tomato10, padding: 10 }}>
                        <ErrorMessage
                          name={`countries.${_idx}.minDays`}
                          component="pre"
                        />
                      </div>
                    </div>
                    <div>
                      <Field
                        as={InputField}
                        id="maxDays"
                        name={`countries.${_idx}.maxDays`}
                        label="Max days"
                        type="number"
                      />
                      <div style={{ color: tomato.tomato10, padding: 10 }}>
                        <ErrorMessage
                          name={`countries.${_idx}.maxDays`}
                          component="pre"
                        />
                      </div>
                    </div>
                    <FormButton
                      type="button"
                      onClick={() => {
                        remove(_idx);
                      }}
                      disabled={values.countries.length === 1}
                      text="remove country"
                    />
                  </CountryFormContainer>
                ))}
              </div>
            )}
          </FieldArray>
          <FormButton
            type="submit"
            text={isSubmitting ? "Submitting data ..." : "Save data"}
            style={{ minWidth: 100 }}
            disabled={isSubmitting}
          />
        </StyledForm>
      )}
    </Formik>
  );
}

// Styling ...
const StyledForm = styled(Form, {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: 50,
  padding: 30,
  width: "100%",
  maxWidth: "90vw",
  border: `1px dashed ${mauve.mauve7}`,
  backgroundColor: mauve.mauve3,
  borderRadius: 7,
  minHeight: "calc(100vh - 80px)",
  position: "relative",
  transition: "all ease-in-out 0.2s",
});

const TopSection = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-between",
  gap: 10,
  width: "100%",
});

const CountryFormContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: 50,
  margin: "10px 0px",
  flexWrap: "wrap",
  padding: 30,
  width: "100%",
  border: `1px dashed  ${mauve.mauve7}`,
  borderRadius: 7,
  backgroundColor: mauve.mauve2,
});

const Select = styled("select", {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderRadius: 4,
  padding: "0 15px",
  fontSize: 13,
  lineHeight: 1,
  height: 35,
  minWidth: 150,
  maxWidth: 200,
  gap: 5,
  backgroundColor: "white",
  color: violet.violet11,
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  "&:hover": { backgroundColor: mauve.mauve3 },
  "&:focus": { boxShadow: `0 0 0 2px black` },
  "&[dataPlaceholder]": { color: violet.violet9 },
});

const Fieldset = styled("fieldset", {
  all: "unset",
  display: "flex",
  gap: 20,
  alignItems: "center",
});

const Label = styled("label", {
  fontSize: 15,
  fontWeight: 600,
  color: violet.violet11,
  textAlign: "right",
});
