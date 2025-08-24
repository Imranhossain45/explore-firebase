import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebaseinit";
export const ProfileDataOfUser = createContext();

const ProfileContext = ({ children }) => {
  const [userProfile, setuserProfile] = useState();
  const [loading, setLoading] = useState(true);
  const registeredUser = (email, confirm_password) => {
    return createUserWithEmailAndPassword(auth, email, confirm_password);
  };
  const saveUserProfile = (profile) => {
    setuserProfile(profile);
  };
  const logout = ()=>{
    return signOut(auth);
  }
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user){
        setuserProfile({
          name:user.displayName,
          email:user.email,
          photoURL:user.photoURL,
          uid:user.uid,
        })
      }else{
        setuserProfile('');
      }
      setLoading(false)
    })
  },[])
  const userInfo = { registeredUser,saveUserProfile,userProfile,logout,loading};
  return (
    <ProfileDataOfUser.Provider value={userInfo}>
      {!loading && children}
    </ProfileDataOfUser.Provider>
  );
};

export default ProfileContext;
