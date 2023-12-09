import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const toogleIsSignIn = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt=""
        />
        <form
          className="absolute top-40 left-1/3 bg-black bg-opacity-80 p-12 w-3/12 text-white"
          action=""
        >
          <h1 className="text-3xl font-bold my-2">
            {isSignIn ? "Sign In" : "Sign up"}
          </h1>
          {!isSignIn && (
            <input
              className="w-full my-2 p-3 rounded-lg bg-gray-900"
              type="text"
              placeholder="Username"
            />
          )}
          <input
            className="w-full my-2 p-3 rounded-lg bg-gray-900"
            type="text"
            placeholder="Email Address"
          />
          <input
            className="w-full my-2 p-3 rounded-lg bg-gray-900"
            type="password"
            placeholder="Password"
          />
          <button className="w-full font-bold text-lg my-4 p-4 bg-red-700 rounded-lg">
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <p className="py-4 cursor-pointer" onClick={toogleIsSignIn}>
            {isSignIn
              ? "new to Netflix? Sign up now."
              : "Already registered? Sign in now."}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
