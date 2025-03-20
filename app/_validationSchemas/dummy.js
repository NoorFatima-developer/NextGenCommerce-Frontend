import * as Yup from "yup";

const dummySchema = Yup.object({
  name: Yup.string().min(4).max(30).required().label("Name"),
  email: Yup.string().email().required(),
  password: Yup.string().min(8).max(50).required(),
});

export { dummySchema };
