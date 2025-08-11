import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";

import { ProfileDataOfUser } from "../../Contexts/ProfileContext";
import { updateProfile } from "firebase/auth";

const SignUp = () => {
  const { registeredUser, saveUserProfile } = useContext(ProfileDataOfUser);
  const formSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirm_password = e.target.confirm_password.value;
    if (password !== confirm_password) {
      alert("Password not matched");
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
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <form
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
        />
        <input
          className="block w-full p-2 border rounded my-2"
          type="email"
          name="email"
          id=""
          placeholder="Email"
        />
        <input
          className="block w-full p-2 border rounded my-2"
          type="password"
          name="password"
          id=""
          placeholder="Password"
        />
        <input
          className="block w-full p-2 border rounded my-2"
          type="password"
          name="confirm_password"
          id=""
          placeholder="Confirm Password"
        />

        <div className="flex justify-between">
          <div>
            <input type="checkbox" name="" id="forChecked" />
            <label htmlFor="forChecked" className="mx-2">
              Show Password
            </label>
          </div>

          <div>
            <input type="checkbox" name="" id="termsAndConditions" />
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
