import * as Yup from "yup";

export const loginUserInitialValues = {email: "", password: "" };

export const loginUserSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(5)
    .max(15, "Must be 15 characters or less")
    .required("Required"),
});
