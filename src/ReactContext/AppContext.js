import React, { createContext, useEffect, useState } from "react";
export const AppContext = createContext();

const getLocalItems = () => {
  let list = localStorage.getItem("lists");
  if (list) {
    return JSON.parse(localStorage.getItem("lists"));
  } else {
    return [];
  }
};

function AppContextProvider(props) {
  const [userForm, setuserForm] = useState({
    title: "",
    details: "",
    status: false,
    dueDate: "",
  });

  const [completed, setCompleted] = useState([]);
  const [filter, setFilter] = useState(false);
  const [filteredTask, setFilteredTask] = useState([]);
  const [userData, setUserData] = useState(getLocalItems);

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(userData));
  }, [userData]);

  const handleFilter = () => {
    setFilter(true);
    const hsh = userData.filter((obj) => obj.status === true);
    setFilteredTask(hsh);
    console.log(filteredTask);
  };

  const handleDueDate = (event) => {
    var date = event.target.value;
    date = date.split("-").reverse().join("-");
    setuserForm({ ...userForm, dueDate: date });
  };

  const handleChangeTitle = (event) => {
    setuserForm({ ...userForm, title: event.target.value });
  };
  const handleChangeDetails = (event) => {
    setuserForm({ ...userForm, details: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userForm.title && userForm.details && userForm.dueDate) {
      setUserData([...userData, userForm]);
      setuserForm({ title: "", details: "", status: false, dueDate: "" });
      setFilter(false);
    }
  };

  const value = {
    completed,
    setCompleted,
    userData,
    setUserData,
    userForm,
    setuserForm,
    handleDueDate,
    handleFilter,
    handleChangeTitle,
    handleChangeDetails,
    handleSubmit,
    filter,
    setFilter,
    filteredTask,
    setFilteredTask,
  };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
}

export default AppContextProvider;
