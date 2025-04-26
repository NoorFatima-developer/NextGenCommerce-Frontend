"use client";
import React from "react";
import FormControlInput from "@/app/_common/components/FormControlInput";
import { useFormikForm } from "@/app/_common/hooks/useFormikForm";
import { Button } from "@/components/ui/button";
import {
  loginUserInitialValues,
  loginUserSchema,
} from "@/app/_validationSchemas/loginUser";

function ForgotUserForm() {
  const { handleSubmit, handleChange, values, handleBlur, errors, touched } =
    useFormikForm(loginUserInitialValues, loginUserSchema, onSubmit);

  function onSubmit(values) {
    console.log(values);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormControlInput
          type="email"
          name="email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values["email"]}
          errorFieldName={errors["email"]}
          touchedFieldName={touched["email"]}
          className="w-3/4 md:w-3/4 lg:w-2/3 p-3 mx-auto"
          placeholder="Enter your email"
        />
        <Button
          type="submit"
          className="w-3/4 md:w-3/4 lg:w-2/3 bg-[#DB4444] hover:bg-[#E07575] text-white mx-auto block mt-4"
        >
          Send Reset Link
        </Button>
      </form>
    </div>
  );
}

export default ForgotUserForm;
