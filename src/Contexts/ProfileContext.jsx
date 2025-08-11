import React, { createContext, useState } from "react";
export const ProfileDataOfUser = createContext();
const ProfileContext = ({children}) => {
  const [hello, setHello] = useState("Hello world");
  const something = { name: "Rahim" };
  const userInfo = { something };
  return (
    <ProfileDataOfUser.Provider value={userInfo}>
      {children}
    </ProfileDataOfUser.Provider>
  );
};

export default ProfileContext;
