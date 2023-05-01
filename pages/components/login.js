import Link from "next/link";
import { FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import LoginIcons from "./loginIcons";

const Login = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
        <main className="flex flex-col items-center justify-center text-center px-20 lg:flex-1 w-full">
          <div className="bg-white rounded-2xl shadow-2xl flex lg:w-2/3 max-w-4xl">
            {/* Sign in Section */}
            <div className="lg:w-3/5 p-5">
              <div className="text-left font-bold">
                <span className="text-green-500">Company</span>Name
              </div>
              <div className="py-10">
                <h2 className="text-3xl font-bold text-green-500 mb-2">
                  Sign in to Account
                </h2>
                <div className="border-2 w-10 border-green-500 inline-block mb-2 rounded-2xl" />
                <div className="flex justify-center my-2">
                  <LoginIcons />
                </div>
                <p className="text-gray-400 my-3">or use your email account</p>
                <div className="flex flex-col items-center">
                  <div className="bg-gray-100 w-full p-2 flex items-center mb-3">
                    <FaRegEnvelope className="text-gray-400 m-2" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="bg-gray-100 outline-none text-sm flex-1"
                    />
                  </div>
                  <div className="bg-gray-100 w-full p-2 flex items-center mb-3">
                    <MdLockOutline className="text-gray-400 m-2" />
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="bg-gray-100 outline-none text-sm flex-1"
                    />
                  </div>
                  <div className="flex lg:w-64 mb-5 justify-between space-x-3">
                    <label className="flex items-center text-xs">
                      <input type="checkbox" name="remember" className="mr-1" />
                      Remember me
                    </label>
                    <Link href="#" className="text-xs">
                      Forgot Password?
                    </Link>
                  </div>
                  <Link
                    href="/"
                    className="border-2 border-green-500 text-green-500 rounded-full px-12 py-2 inline-block font-semibold
                  hover:bg-green-500 hover:text-white capitalize"
                  >
                    sign in
                  </Link>
                </div>
              </div>
            </div>
            {/* sign up Section */}
            <div className="lg:w-2/3 bg-green-500 text-white rounded-br-2xl rounded-tr-2xl py-36 px-12">
              <h2 className="text-3xl font-bold mb-2 capitalize">
                hello, friend
              </h2>
              <div className="border-2 w-10 border-white inline-block mb-2 rounded-2xl" />
              <p className="mb-10">
                Fill up personal information and start journey with us
              </p>
              <Link
                href="/"
                className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white
            hover:text-green-500 capitalize"
              >
                sign up
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Login;
