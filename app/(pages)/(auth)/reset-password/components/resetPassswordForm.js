"use client"
import FormControlInput from "@/app/_common/components/FormControlInput";
import { useFormikForm } from "@/app/_common/hooks/useFormikForm";
import { loginUserInitialValues, loginUserSchema } from "@/app/_validationSchemas/loginUser";
import { Button } from "@/components/ui/button";
import React from "react";

function ResetPassswordForm() {
  const { handldeReset, handleBlur, touched, errors, handleChange, values } =
    useFormikForm(loginUserInitialValues, loginUserSchema, onSubmit);

    function onSubmit (values) {
        console.log(values);
        
    }

  return (
    <div>
      <form onSubmit={handldeReset}>
        <FormControlInput
          type="password"
          name="password"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values["password"]}
          errorFieldName={errors["password"]}
          touchedFieldName={touched["password"]}
          className="w-3/4 md:w-3/4 lg:w-2/3 p-3 mx-auto"
          placeholder="New Password"
        />

        <FormControlInput
          type="password"
          name="password"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values["password"]}
          errorFieldName={errors["password"]}
          touchedFieldName={touched["password"]}
          className="w-3/4 md:w-3/4 lg:w-2/3 p-3 mx-auto mt-4"
          placeholder="Confirm Password"
        />

        <Button
          type="submit"
          className="w-3/4 md:w-3/4 lg:w-2/3 bg-[#DB4444] hover:bg-[#E07575] text-white mx-auto block mt-4"
        >
          Reset Password
        </Button>
      </form>
    </div>
  );
}



export default ResetPassswordForm;
