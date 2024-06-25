import React from "react";
import logo from "../../image/logo.png";
import LoginHook from "../../hook/auth/login-hook";
import { ToastContainer } from "react-toastify";

const Auth = () => {
  const [
    email,
    password,
    loading,
    onChangeEmail,
    onChangePassword,
    onSubmit,
    isPress,
  ] = LoginHook();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(); // Assuming onSubmit handles the form submission logic
  };

  return (
    <>
      <div className="wrapper h-screen w-full flex justify-center items-center ">
        <div className="content px-10 flex justify-center items-center shadow-xl">
          <div className="images px-16 flex flex-col justify-center items-center">
            <img src={logo} alt="Logo" className="w-14" />
            <h2 className="text-3xl text-white font-semibold">Welcome</h2>
          </div>

          <div className="info">
            <div className="mx-auto max-w-screen-xl px-4 lg:px-8">
              <div className="mx-auto max-w-lg">
                <form
                  className="mb-0 mt-6 bg-white space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
                  onSubmit={handleSubmit}
                >
                  <p className="text-center text-lg font-medium">
                    Sign in to your account
                  </p>
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <div className="relative">
                      <input
                        value={email}
                        onChange={onChangeEmail}
                        type="email"
                        className="w-full outline-none rounded-lg border-gray-200 border p-2 text-sm"
                        placeholder="Enter email"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="password" className="sr-only">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        value={password}
                        onChange={onChangePassword}
                        type="password"
                        className="w-full outline-none rounded-lg bg-gray-200 p-2 text-sm shadow-sm"
                        placeholder="Enter password"
                      />
                    </div>
                  </div>
                  <p className="text-start underline cursor-pointer text-xs text-black">
                    Forgot your password?
                  </p>
                  <button
                    type="submit"
                    className={`block w-full rounded-lg bg-red-600 px-5 py-2 text-sm font-medium text-white ${
                      loading ? "opacity-50 cursor-not-allowed" : "hover:bg-red-700"
                    }`}
                    disabled={loading}
                  >
                    {loading && isPress ? <>
                      <div class="text-center">
  <div
    class="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-yellow-500 mx-auto"
  ></div>
  <h2 class="text-zinc-900 dark:text-white mt-4">Loading...</h2>
  <p class="text-zinc-600 dark:text-zinc-400">
    Your adventure is about to begin
  </p>
</div>

                    </> : "Sign in"}
                  </button>
                </form>
                <p className="text-white mt-10 text-xs text-center">
                  © 2024 Firm Foundation School Management
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer
        theme="light"
        position="top-right"
        autoClose={3000}
        closeOnClick
        pauseOnHover={false}
      />
    </>
  );
};

export default Auth;
