import React from "react";
import { getAuth,signInWithPopup,GithubAuthProvider } from "firebase/auth";
import { app } from "../../Firebase/firebaseinit";

const SignInWithGithub = () => {
  const auth = getAuth(app);
  const provider = new GithubAuthProvider();
  const githubLoginBtn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GithubAuthProvider.credentialFromError(error);
        // ...
      });
  };
  return (
    <div>
      <button onClick={githubLoginBtn}> Login with Github</button>
    </div>
  );
};

export default SignInWithGithub;
