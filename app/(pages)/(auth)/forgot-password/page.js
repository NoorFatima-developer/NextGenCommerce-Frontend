import Link from "next/link";
import ForgotUserForm from "./components/ForgotUserForm";

function ForgotPassword() {
    return (
        <div className="h-screen flex items-center justify-center p-6">
          <div className="w-full max-w-md mx-auto">
            <h1 className="text-3xl font-bold mb-2 text-center">Forgot Password</h1>
            <p className="text-gray-600 mb-6 text-center">
              Enter your email to receive a password reset link.
            </p>
        
            <ForgotUserForm/>
           {/* {message && <p className="text-green-600 text-center mb-4">{message}</p>} */}
            <div className="mt-4 text-center">
              <Link href="/login" className="text-black underline">
                Back to Login
              </Link>
            </div>
          </div>
        </div>
      );
    };

export default ForgotPassword
