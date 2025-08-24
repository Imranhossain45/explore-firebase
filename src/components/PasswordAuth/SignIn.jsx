import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "../../Firebase/firebaseinit";
import { ProfileDataOfUser } from "../../Contexts/ProfileContext";

const SignIn = () => {
  const { saveUserProfile } = useContext(ProfileDataOfUser);
  const [showPass, setShowPass] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const emailRef = useRef(null);

  const handleLoginForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setSuccessMessage("");
    setErrorMessage("");
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        saveUserProfile({
          name: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          uid: user.uid,
        });

        if (!user.emailVerified) {
          alert("Please verify your email");
          setSuccessMessage("Login Succesfully!");
        }
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage("Error", err.message);
      });
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");
    const email = emailRef.current.value;

    sendPasswordResetEmail(auth, email)
      .then(() => {
        setSuccessMessage("We have sent a password reset link into your email");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };
  return (
    <div>
      <form
        onSubmit={handleLoginForm}
        className="bg-slate-900 text-white w-1/2 mx-auto my-5 p-10 shadow-2xl rounded-lg"
      >
        <h2 className="text-center text-3xl underline mb-3">Login</h2>
        <input
          ref={emailRef}
          className="block w-full p-2 border"
          type="email"
          name="email"
          id=""
          placeholder="Email"
        />
        <input
          className="block w-full p-2 border my-5"
          type={showPass ? "text" : "password"}
          name="password"
          id=""
          placeholder="Password"
        />
        <div className="flex justify-between">
          <div>
            <input
              onClick={() => setShowPass(!showPass)}
              type="checkbox"
              name=""
              id="forChecked"
            />
            <label htmlFor="forChecked" className="mx-2">
              Show Password
            </label>
          </div>
          <Link
            onClick={handleResetPassword}
            className="text-cyan-400 hover:text-cyan-500 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>
        <input
          type="submit"
          value="Login"
          className="block w-full bg-cyan-900 my-3 hover:bg-cyan-950 cursor-pointer p-2 rounded-lg"
        />
        {errorMessage && (
          <p className="text-center text-red-400 bg-cyan-950 py-3 text-xl animate-bounce">
            {errorMessage}
          </p>
        )}
        {successMessage && (
          <p className="text-center text-green-400 bg-cyan-950 py-3 text-xl animate-bounce">
            {successMessage}
          </p>
        )}
        <div className="flex justify-center items-center gap-3">
          <hr className="border-gray-400 w-1/4" />
          <span>or continue with</span>
          <hr className="border-gray-400 w-1/4" />
        </div>
        <p className="mt-5">
          <button className="flex gap-2 items-center justify-center w-full hover:bg-gray-500 border p-1 rounded cursor-pointer my-2">
            {" "}
            <FaGoogle className="text-orange-400" />{" "}
            <span>Login with Google</span>
          </button>
          <button className="flex gap-2 items-center justify-center w-full hover:bg-gray-500 border p-1 rounded cursor-pointer my-2">
            {" "}
            <FaFacebook className="text-orange-400" />{" "}
            <span>Login with Facbook</span>
          </button>
          <button className="flex gap-2 items-center justify-center w-full hover:bg-gray-500 border p-1 rounded cursor-pointer my-2">
            {" "}
            <FaGithub className="text-orange-400" />{" "}
            <span>Login with Github</span>
          </button>
        </p>
        <p className="text-center mt-5">
          Don't Have an Account?{" "}
          <Link
            className="bg-cyan-900 my-3 hover:bg-cyan-950 cursor-pointer p-2 rounded"
            to={"/register"}
          >
            Register
          </Link>{" "}
        </p>
      </form>
    </div>
  );
};

export default SignIn;
