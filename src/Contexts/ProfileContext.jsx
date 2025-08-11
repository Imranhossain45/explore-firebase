import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { createContext, useState } from "react";
import auth from "../Firebase/firebaseinit";
export const ProfileDataOfUser = createContext();

const ProfileContext = ({ children }) => {
  const [userProfile, setuserProfile] = useState();
  const registeredUser = (email, confirm_password) => {
    return createUserWithEmailAndPassword(auth, email, confirm_password);
  };
  const saveUserProfile = (profile) => {
    setuserProfile(profile);
  };
  const userInfo = { registeredUser,saveUserProfile,userProfile};
  return (
    <ProfileDataOfUser.Provider value={userInfo}>
      {children}
    </ProfileDataOfUser.Provider>
  );
};

export default ProfileContext;
