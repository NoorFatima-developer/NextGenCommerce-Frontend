import * as Yup from "yup";

export const homeUserInitialValues = { category: "all" };

export const homeUserSchema = Yup.object({
  category: Yup.object({
        activeCategory: Yup.string().required("Category is required"),
      }),
});
