import React, { createContext, useState } from "react";
export const AppContext = createContext();

function AppContextProvider(props) {
  const [userForm, setuserForm] = useState({
    title: "",
    details: "",
    status: false,
  });

  const [completed, setCompleted] = useState([]);
  const [userData, setUserData] = useState([]);

  const handleChangeTitle = (event) => {
    setuserForm({ ...userForm, title: event.target.value });
  };
  const handleChangeDetails = (event) => {
    setuserForm({ ...userForm, details: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userForm.title && userForm.details) {
      setUserData([...userData, userForm]);
    }
  };

  const value = {
    completed,
    setCompleted,
    userData,
    setUserData,
    userForm,
    setuserForm,
    handleChangeTitle,
    handleChangeDetails,
    handleSubmit,
  };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
}

export default AppContextProvider;
