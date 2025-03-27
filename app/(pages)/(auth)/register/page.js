import Link from "next/link";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import RegisterUserForm from "./components/registerUserForm";

const SignUp = () => {
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
            Create an account
          </h1>
          <p className="text-gray-600 mb-6 text-center">
            Enter your details below
          </p>

          <RegisterUserForm />

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
