import React, { useContext } from "react";
import { ProfileDataOfUser } from "../Contexts/ProfileContext";

const Products = () => {
  const { userProfile } = useContext(ProfileDataOfUser);
  return <div>
    
      <h2>Name:{userProfile.name}</h2>
      <h2>Email:{userProfile.email}</h2>
      <h2>UID:{userProfile.uid}</h2>
    
  </div>;
};

export default Products;
