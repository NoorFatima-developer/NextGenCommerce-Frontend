"use client";
import { useFormikForm } from "@/app/_common/hooks/useFormikForm";
import { dummySchema } from "@/app/_validationSchemas/dummy";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const BasicForm = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const {
    errors,
    values,
    handleChange,
    handleSubmit: formikHandleSubmit,
  } = useFormikForm(initialValues, handleSubmit, dummySchema);

  function handleSubmit(values) {
    console.log(values);
  }

  return (
    <div>
      <form onSubmit={formikHandleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <Input
            name="name"
            placeholder="Enter your name"
            onChange={handleChange}
            value={values["name"]}
          />
          {errors["name"] && (
            <span className="text-red-500">{errors["name"]}</span>
          )}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Input
            name="email"
            placeholder="Enter your email"
            onChange={handleChange}
            value={values["email"]}
          />
          {errors["email"] && (
            <span className="text-red-500">{errors["email"]}</span>
          )}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Input
            name="password"
            placeholder="Enter your password"
            onChange={handleChange}
            value={values["password"]}
          />
          {errors["password"] && (
            <span className="text-red-500">{errors["password"]}</span>
          )}
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default BasicForm;
