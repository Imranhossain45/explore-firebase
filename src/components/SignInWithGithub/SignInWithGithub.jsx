import React, { useState } from "react";
import { getAuth,signInWithPopup,GithubAuthProvider } from "firebase/auth";
import { app } from "../../Firebase/firebaseinit";

const SignInWithGithub = () => {
  const [userInfo, setUserInfo] = useState(null);
  const auth = getAuth(app);
  const provider = new GithubAuthProvider();
  const githubLoginBtn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUserInfo(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
    {
      userInfo && 
      <div>
        <h2>{userInfo.displayName}</h2>
      </div>
    }
      <button onClick={githubLoginBtn}> Login with Github</button>
    </div>
  );
};

export default SignInWithGithub;
