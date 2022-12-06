import FormButton from "./Button";
import InputField from "./InputField";
import SelectField from "./SelectField";
import { styled } from "@stitches/react";
import { mauve } from "@radix-ui/colors";
import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import { FormValues } from "../types";

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
  margin: "10px 0px",
  flexWrap: "wrap",
  padding: 30,
  width: "100%",
  border: `1px dashed  ${mauve.mauve7}`,
  borderRadius: 7,
  backgroundColor: mauve.mauve2,
});

const initialValues: FormValues = {
  name: "",
  countries: [
    {
      name: "",
      cost: 0,
      maxDays: 0,
      minDays: 0,
    },
  ],
};

interface ICountryDic {
  [index: string]: {
    cost: number;
    minDays: number;
    maxDays: number;
  };
}
interface IDBdata {
  name: string;
  countries: ICountryDic;
}

const handleSubmit = (values: FormValues) => {
  let countriesArr = values.countries;
  let countries: {
    [index: string]: {
      cost: number;
      minDays: number;
      maxDays: number;
    };
  } = {};

  countriesArr.forEach((cntry) => {
    countries[cntry.name] = {
      cost: Number(cntry.cost),
      minDays: Number(cntry.minDays),
      maxDays: Number(cntry.maxDays),
    };
  });

  const dataToBeSentToDB: IDBdata = {
    name: values.name,
    countries,
  };

  console.log(dataToBeSentToDB);
};
function CountriesForm() {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values: FormValues) => {
        handleSubmit(values);
      }}
    >
      {({ values }) => (
        <StyledForm>
          <TopSection>
            <Field
              as={InputField}
              label="Shipping line name"
              id="name"
              name="name"
              autoFocus
            />
            <ErrorMessage name="name" component="div" />
          </TopSection>
          <FieldArray name="countries">
            {({ push, remove }) => (
              <div>
                <FormButton
                  type="button"
                  text="Add country"
                  onClick={() => {
                    console.log("dd");
                    push({ name: "", cost: 0, maxDays: 0, minDays: 0 });
                  }}
                />
                {values.countries.map((country, _idx) => (
                  <CountryFormContainer key={_idx}>
                    <Field as={SelectField} name={`countries.${_idx}.name`} />
                    <ErrorMessage
                      name={`countries.${_idx}.name`}
                      component="div"
                    />
                    <Field
                      as={InputField}
                      id="cost"
                      name={`countries.${_idx}.cost`}
                      label="Cost"
                      value={values.countries[_idx].cost}
                    />
                    <ErrorMessage
                      name={`countries.${_idx}.cost`}
                      component="div"
                    />
                    <Field
                      as={InputField}
                      id="minDays"
                      name={`countries.${_idx}.minDays`}
                      label="Min days"
                    />
                    <ErrorMessage
                      name={`countries.${_idx}.minDays`}
                      component="div"
                    />
                    <Field
                      as={InputField}
                      id="maxDays"
                      name={`countries.${_idx}.maxDays`}
                      label="Max days"
                    />
                    <ErrorMessage
                      name={`countries.${_idx}.maxDays`}
                      component="div"
                    />
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
          <FormButton type="submit" text="Save data" style={{ width: 100 }} />
        </StyledForm>
      )}
    </Formik>
  );
}

export default CountriesForm;
