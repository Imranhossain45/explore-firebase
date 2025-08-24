import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProfileDataOfUser } from "../Contexts/ProfileContext";

const Navbar = () => {
  const { userProfile, logout } = useContext(ProfileDataOfUser);
  const hanleSignout = () => {
    logout().then().catch();
  };
  return (
    <div className="bg-slate-900 py-4">
      <div className="container flex justify-between text-white mx-auto">
        <div>
          <h2>Practice</h2>
        </div>
        <div className="flex gap-3">
          <ul className="flex gap-3">
            <li>
              <Link to={"home"}>Home</Link>
            </li>
            <li>
              <Link to={"products"}>Products</Link>
            </li>
            <li>
              <Link to={"contact"}>Contact</Link>
            </li>
            <li>
              <Link to={"login"}>Login</Link>
            </li>
            <li>
              <Link to={"register"}>Register</Link>
            </li>
          </ul>
          <div className="flex">
            {userProfile ? (
              <div className="flex">
                <p>{userProfile.name}</p>
                <button
                  onClick={hanleSignout}
                  className="btn bg-cyan-800 p-3 ml-3 cursor-pointer"
                >
                  SignOut
                </button>
              </div>
            ) : (
              <button className="btn bg-cyan-800 p-3 ml-3 cursor-pointer">Login</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
