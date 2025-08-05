import React from "react";
import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { app } from "../../Firebase/firebaseinit";
const SignInWIthFB = () => {
  const provider = new FacebookAuthProvider();
  const auth = getAuth(app);
  const facebookLoginBtn = () =>{
    signInWithPopup(auth, provider)
    .then((result) => {
      // The signed-in user info.
      const user = result.user;
      console.log(user);

      
      // const credential = FacebookAuthProvider.credentialFromResult(result);
      // const accessToken = credential.accessToken;

    })
    .catch((error) => {
      console.log(error);
      // Handle Errors here.
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // The email of the user's account used.
      // const email = error.customData.email;
      // The AuthCredential type that was used.
      // const credential = FacebookAuthProvider.credentialFromError(error);

      // ...
    });
  }
  return (
    <div>
      <button onClick={facebookLoginBtn}>SignInWIthFB</button>
    </div>
  );
};

export default SignInWIthFB;
