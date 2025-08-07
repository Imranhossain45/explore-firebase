import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { app } from "../../Firebase/firebaseinit";

const PasswordAuth = () => {
  const handleSignUp = (e) => {
    e.preventDefault();
    const auth = getAuth(app);
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
       console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <form onSubmit={handleSignUp}>
        <input type="email" name="email" id="" placeholder="Enter Email" />
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default PasswordAuth;
