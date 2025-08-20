import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";

import { ProfileDataOfUser } from "../../Contexts/ProfileContext";
import { updateProfile } from "firebase/auth";

const SignUp = () => {
  const { registeredUser, saveUserProfile } = useContext(ProfileDataOfUser);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showPass, setShowPass] = useState(false);
  const formRef = useRef(null);
  var regularExpression =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  const formSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirm_password = e.target.confirm_password.value;
    const termsAndConditions = e.target.termsAndConditions.checked;
    setSuccessMessage("");
    setErrorMessage("");
    if (password !== confirm_password) {
      setErrorMessage("Password not matched!");
      return;
    } else if (password.length < 6 || confirm_password.length < 6) {
      setErrorMessage("Password should be at least 6 charecters!");
      return;
    }
    if (!regularExpression.test(confirm_password)) {
      setErrorMessage(
        "Password should be at least 6 charecters long and include at least one uppercase letter,one lowercase letter, one number and one special character!"
      );
      return;
    } else if (!termsAndConditions) {
      setErrorMessage("You Must Accept the Terms and Conditions!");
      return;
    }
    if (name == "") {
      setErrorMessage("Name field is required!");
      return;
    }
    if (email == "") {
      setErrorMessage("Email field is required!");
      return;
    }
    if (password == "") {
      setErrorMessage("Password field is required!");
      return;
    }

    registeredUser(email, confirm_password)
      .then((result) => {
        const user = result.user;
        updateProfile(user, {
          displayName: name,
        })
          .then(() => {
            saveUserProfile({
              name: user.displayName,
              email: user.email,
              uid: user.uid,
            });
          })
          .catch((err) => {
            console.log(err);
          });
        setSuccessMessage("Registration Success...");
        form.reset();
      })
      .catch((err) => {
        setErrorMessage(err.message);
      });
  };
  return (
    <div>
      <form
        ref={formRef}
        className="bg-slate-900 text-white w-1/2 mx-auto my-5 p-10 shadow-2xl rounded-lg"
        onSubmit={formSubmit}
      >
        <h2 className="text-center text-3xl underline mb-3">Register</h2>
        <input
          className="block w-full p-2 border rounded"
          type="text"
          name="name"
          id=""
          placeholder="Name"
          required
        />
        <input
          className="block w-full p-2 border rounded my-2"
          type="email"
          name="email"
          id=""
          placeholder="Email"
          required
        />
        <input
          className="block w-full p-2 border rounded my-2"
          type={showPass ? "text" : "password"}
          name="password"
          id=""
          placeholder="Password"
        />
        <input
          className="block w-full p-2 border rounded my-2"
          type={showPass ? "text" : "password"}
          name="confirm_password"
          id=""
          placeholder="Confirm Password"
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

          <div>
            <input
              type="checkbox"
              name="termsAndConditions"
              id="termsAndConditions"
            />
            <label htmlFor="termsAndConditions">
              {" "}
              I agree to the{" "}
              <Link to={"/termsandconditions"} className="text-cyan-400">
                Terms and Conditions
              </Link>
            </label>
          </div>
        </div>
        <input
          type="submit"
          value="Register"
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
          Already Have an Account?{" "}
          <Link
            className="bg-cyan-900 my-3 hover:bg-cyan-950 cursor-pointer p-2 rounded"
            to={"/login"}
          >
            Login
          </Link>{" "}
        </p>
      </form>
    </div>
  );
};

export default SignUp;
