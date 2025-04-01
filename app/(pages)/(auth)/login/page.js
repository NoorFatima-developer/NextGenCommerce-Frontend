import React from "react";
import Image from "next/image";
import LoginUserForm from "./components/loginUserForm";

const Login = () => {
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
          <h1 className="text-3xl font-bold mb-2 text-center">
            Log in to Exclusive
          </h1>
          <p className="text-gray-600 mb-6 text-center">
            Enter your details below
          </p>

          <LoginUserForm />
  
        </div>
      </div>
    </div>
  )
};

export default Login;
