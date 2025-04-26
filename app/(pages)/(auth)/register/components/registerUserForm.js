"use client";

import React from "react";
import { useFormikForm } from "@/app/_common/hooks/useFormikForm";
import {
  registerUserInitialValues,
  registerUserSchema,
} from "@/app/_validationSchemas/registerUser";
import FormControlInput from "@/app/_common/components/FormControlInput";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/app/_contexts/AuthContext";
import toast from "react-hot-toast";

const RegisterUserForm = () => {
  const { handleSubmit, handleChange, values, handleBlur, errors, touched } =
    useFormikForm(registerUserInitialValues, onSubmit, registerUserSchema);

  const { register, loadingRegister } = useAuth();

  function onSubmit(values) {
    register(values);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <FormControlInput
          type="text"
          name="name"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values["name"]}
          errorFieldName={errors["name"]}
          touchedFieldName={touched["name"]}
          className="w-3/4 md:w-3/4 lg:w-2/3 p-3 mx-auto"
          placeholder="Enter your name"
        />

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

        <FormControlInput
          type="password"
          name="password"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values["password"]}
          errorFieldName={errors["password"]}
          touchedFieldName={touched["password"]}
          className="w-3/4 md:w-3/4 lg:w-2/3 p-3 mx-auto"
          placeholder="Enter your password"
        />

        <Button
          type="submit"
          className="w-3/4 md:w-3/4 lg:w-2/3 bg-[#DB4444] hover:bg-[#E07575] text-white mx-auto block"
        >
          {loadingRegister ? "Loading..." : "Register"}
        </Button>
      </form>
    </div>
  );
};

export default RegisterUserForm;
