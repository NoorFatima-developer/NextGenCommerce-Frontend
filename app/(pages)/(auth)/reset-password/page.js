import ResetPassswordForm from "./components/resetPassswordForm";

function ResetPasswordForm() {
    return (
        <div className="h-screen flex items-center justify-center p-6">
          <div className="w-full max-w-md mx-auto">
            <h1 className="text-3xl font-bold mb-2 text-center">Reset Password</h1>
            <p className="text-gray-600 mb-6 text-center">
              Enter your email to receive a password reset link.
            </p>

            <ResetPassswordForm/>

          </div>
        </div>
      );
    };

export default ResetPasswordForm
