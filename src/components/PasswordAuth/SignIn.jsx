import React from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../Firebase/firebaseinit";

const SignIn = () => {
  const auth = getAuth(app);
  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="bg-amber-300">
      <form onSubmit={handleSignIn}>
        <input type="email" name="email" id="" className="bg-amber-500" placeholder="Enter Email" />
        <br />
        <br />
        <input
          type="password"
          name="password"
          id=""
          placeholder="Enter Password"
        />
        <br />
        <br />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
