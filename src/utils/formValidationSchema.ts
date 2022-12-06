import * as Yup from "yup";

const requiredStr = "This field is required";

export const formValidationSchema = Yup.object().shape({
  shippingName: Yup.string()
    .min(4, "Name too short!")
    .max(25, "Name too long!")
    .required(requiredStr),
  countries: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().min(2, "Must select a country!").required(requiredStr),
      cost: Yup.number().min(1, "Minimum is 1!").required(requiredStr),
      minDays: Yup.number()
        .min(0, "Must be 0 or more!")
        .integer("Days must be of type integer!")
        .required(requiredStr),
      maxDays: Yup.number()
        .min(0, "Must be 0 or more!")
        .integer("Days must be of type integer!")
        .required(requiredStr),
    })
  ),
});
