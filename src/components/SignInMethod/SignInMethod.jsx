import React, { useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GithubAuthProvider,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signOut,
} from "firebase/auth";
import { app } from "../../Firebase/firebaseinit";

const SignInMethod = () => {
  const [userInfo, setUserInfo] = useState(null);
  const auth = getAuth(app);
  const githubLoginBtn = () => {
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        setUserInfo(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const googleLoginBtn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        setUserInfo(result.user);
      })
      .catch((error) => {
        console.log("Error" + error);
      });
  };
  const facebookLoginBtn = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        setUserInfo(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const signOutBtn = () => {
    signOut(auth)
      .then((result) => {
        setUserInfo(null);
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      {userInfo && (
        <div>
          <h2>{userInfo.displayName}</h2>
        </div>
      )}
      {userInfo ? (
        <button onClick={signOutBtn}>Log Out</button>
      ) : (
        <div>
          <button onClick={githubLoginBtn}>Login With Github</button>
          <button onClick={googleLoginBtn}>Login With Google</button>
          <button onClick={facebookLoginBtn}>Login With Facebook</button>
        </div>
      )}
    </div>
  );
};

export default SignInMethod;
