import * as Yup from "yup";

export const registerUserInitialValues = { name: "", email: "", password: "" };

export const registerUserSchema = Yup.object({
  name: Yup.string()
    .min(3)
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(5)
    .max(15, "Must be 15 characters or less")
    .required("Required"),
});
