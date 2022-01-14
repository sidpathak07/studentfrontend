import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [registerDetails, setRegisterDetails] = useState({
    name: "",
    class: "",
    div: "",
    roll_no: null,
    email: "",
    prn: "",
    password: "",
    confirmPassword: "",
    frontSide: "",
    leftSide: "",
    rightSide: "",
  });

  const [userDetails, setUserDetails] = useState({
    name: "",
    class: "",
    div: "",
    roll_no: null,
    email: "",
    prn: "",
    frontSide: "",
    leftSide: "",
    rightSide: "",
  });
  return (
    <UserContext.Provider
      value={{
        registerDetails,
        setRegisterDetails,
        userDetails,
        setUserDetails,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
