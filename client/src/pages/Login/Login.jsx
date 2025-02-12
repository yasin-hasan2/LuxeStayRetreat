import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
// import axios from "axios";
import toast from "react-hot-toast";
import { ImSpinner9 } from "react-icons/im";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";
  const { signInWithGoogle, resetPassword, loading, setLoading, signIn } =
    useAuth();

  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const from = e.target;
    const email = from.email.value;
    // setEmail(email);
    const password = from.password.value;

    try {
      setLoading(true);

      //2.User  SignIn
      await signIn(email, password);
      navigate("/");
      toast.success("signUp successful");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
      setLoading(false);
    }
  };

  const handleResetPassword = async () => {
    if (!email) {
      return toast.error("Please write your email first!");
    }
    try {
      await resetPassword(email);
      toast.success(
        "Request Success! Check your email for further process ..."
      );
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
    // console.log(email);
  };

  // handle google signing
  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();

      navigate(from);
      toast.success("SignUp Successful");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Log In</h1>
          <p className="text-sm text-gray-400">
            Sign in to access your account
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                onBlur={(e) => setEmail(e.target.value)}
                id="email"
                required
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#449698] bg-gray-200 text-gray-900"
              />
            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm mb-2">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                autoComplete="current-password"
                id="password"
                required
                placeholder="*******"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#449698] bg-gray-200 text-gray-900"
              />
            </div>
          </div>

          <div>
            <button
              disabled={loading}
              type="submit"
              className="bg-[#449698] w-full rounded-md py-3 text-white"
            >
              {loading ? (
                <ImSpinner9 className="animate-spin text-2xl m-auto text-yellow-300" />
              ) : (
                "Continue"
              )}
            </button>
          </div>
        </form>
        <div className="space-y-1">
          <button
            onClick={handleResetPassword}
            className="text-xs hover:underline hover:text-rose-500 text-gray-400"
          >
            Forgot password?
          </button>
        </div>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <button
          disabled={loading}
          onClick={handleGoogleSignIn}
          className=" hidden disabled:cursor-not-allowed cursor-pointer  justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded"
        >
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </button>
        <p className="px-6 text-sm text-center text-gray-400">
          Don&apos;t have an account yet?{" "}
          <Link
            to="/signup"
            className="hover:underline hover:text-[#449698] text-gray-600"
          >
            Sign up
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Login;
