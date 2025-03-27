"use client";
import { useFormik } from "formik";
import Link from "next/link";
import Image from "next/image";
import * as Yup from "yup";
import { FcGoogle } from "react-icons/fc";

// Validation Schema using Yup
const validate = Yup.object({
  name: Yup.string().min(3).max(15, "Must be 15 characters or less").required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().min(5).max(15, "Must be 15 characters or less").required("Required"),
});

const SignUp = () => {
  const { handleSubmit, handleChange, values, handleBlur, errors, touched } = useFormik({
    initialValues: { name: "", email: "", password: "" },
    validationSchema: validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="h-screen flex">
  {/* Left Side Image */}
  <div className="hidden md:flex w-1/2 justify-start">
    <Image
      src="/frame 760.png"
      alt="Signup Illustration"
      width={400}
      height={400}
      className="w-[85%] h-auto object-contain"
    />
  </div>

  {/* Right Side Form */}
  <div className="w-full md:w-1/2 flex items-center justify-center p-6">
    <div className="w-full max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-2 text-center">Create an account</h1>
      <p className="text-gray-600 mb-6 text-center">Enter your details below</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-3/4 md:w-3/4 lg:w-2/3 p-3 pb-2 mb-4 border-b-2 border-gray-300 focus:border-gray-500 outline-none bg-transparent mx-auto block"
            onChange={handleChange}
            value={values.name}
            onBlur={handleBlur}
          />
          {touched.name && errors.name ? (
            <div className="text-red-500 text-sm mt-1 mx-auto w-3/4 md:w-3/4 lg:w-2/3">{errors.name}</div>
          ) : null}
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Email or Phone Number"
            className="w-3/4 md:w-3/4 lg:w-2/3 p-3 pb-2 mb-4 border-b-2 border-gray-300 focus:border-gray-500 outline-none bg-transparent mx-auto block"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {touched.email && errors.email ? (
            <div className="text-red-500 text-sm mt-1 mx-auto w-3/4 md:w-3/4 lg:w-2/3">{errors.email}</div>
          ) : null}
        </div>

        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-3/4 md:w-3/4 lg:w-2/3 p-3 pb-2 mb-4 border-b-2 border-gray-300 focus:border-gray-500 outline-none bg-transparent mx-auto block"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {touched.password && errors.password ? (
            <div className="text-red-500 text-sm mt-1 mx-auto w-3/4 md:w-3/4 lg:w-2/3">{errors.password}</div>
          ) : null}
        </div>

        <button
          type="submit"
          className="w-3/4 md:w-3/4 lg:w-2/3 p-3 pb-2 mb-4 bg-[#DB4444] hover:bg-[#E07575] text-white py-3 rounded-md mx-auto block"
        >
          Create Account
        </button>
      </form>

      <div className="mt-4">
        <button className="w-3/4 md:w-3/4 lg:w-2/3 p-3 pb-2 mb-4 flex items-center justify-center gap-2 border mx-auto border-gray-300 py-3">
          <FcGoogle className="w-5 h-5 mr-2" />
          <span>Sign up with Google</span>
        </button>
      </div>

      <div className="mt-4 text-center">
        <span className="text-gray-600">Already have an account?</span>{" "}
        <Link href="/login" className="text-black font-medium underline">
          Login
        </Link>
      </div>
    </div>
  </div>
</div>

  );
};

export default SignUp;
