import React, { useState } from "react";
import {
  signOut,
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { app } from "../Firebase/firebaseinit";

const SignInWithGoogle = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const signInBtnClick = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const userInfo = result.user;
        setUser(userInfo);
        console.log(userInfo);
      })
      .catch((error) => {
        console.log("Error" + error);
      });
  };
  const signOutBtn = () => {
    signOut(auth)
      .then((result) => {
        setUser(null);
        console.log('Log out done');
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      {user && (
        <div>
          <img src={user.photoURL} alt="user" />
          <h2>{user.displayName}</h2>
          <h4>{user.email}</h4>
        </div>
      )}
      {
        user ? <button onClick={signOutBtn}>Log Out</button> :
        <button onClick={signInBtnClick}>Sign In With Google</button>
      
      }
    </div>
  );
};

export default SignInWithGoogle;
