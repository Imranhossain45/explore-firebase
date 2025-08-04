import React from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../Firebase/firebaseinit';

const SignInWithGoogle = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const signInBtnClick = () =>{
    signInWithPopup(auth,provider)
    .then(result =>{
      const user = result.user;
      console.log(user);
    })
    .catch(error =>{
      console.log('Error' + error);
    })
  }
  return (
    <div>
      <button onClick={signInBtnClick}>Sign In With Google</button>
    </div>
  )
}

export default SignInWithGoogle