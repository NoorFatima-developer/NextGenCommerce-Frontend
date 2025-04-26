"use client";

import React from "react";
import { useFormikForm } from "@/app/_common/hooks/useFormikForm";
import {
  registerUserInitialValues,
  registerUserSchema,
} from "@/app/_validationSchemas/registerUser";
import FormControlInput from "@/app/_common/components/FormControlInput";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useAuth } from "@/app/_contexts/AuthContext";

const LoginUserForm = () => {
  const { login, loadingLogin } = useAuth();

  function onSubmit(values) {
    console.log(values);
  }

  const { handleSubmit, handleChange, values, handleBlur, errors, touched } =
    useFormikForm(registerUserInitialValues, onSubmit, registerUserSchema);

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
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

        <div className="w-3/4 md:w-3/4 lg:w-2/3 mx-auto flex justify-between items-center pt-2">
          <Button
            type="submit"
            className="bg-[#DB4444] hover:bg-[#c13c3c] text-white px-6"
          >
            {loadingLogin ? "Loading..." : "Login"}
          </Button>
          <Link
            href="/reset-password"
            className="text-[#DB4444] hover:text-[#c13c3c] underline"
          >
            Forgot Password
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginUserForm;
