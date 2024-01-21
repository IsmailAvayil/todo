import React, { useContext } from "react";
import "../TodoApp/TodoApp.css";
import { AppContext } from "../../ReactContext/AppContext";

function DisplayTask() {
  const { userData, setUserData } = useContext(AppContext);

  const deleteItem = (item) => {
    const filteredData = userData.filter((obj, index) => index !== item);
    setUserData(filteredData);
  };

  const handleChangeStatus = (id) => {
    const com = userData.map((itm, index) => {
      if (index === id) {
        return { ...itm, status: !itm.status };
      }
      console.log(itm.status);
      return itm;
    });
    setUserData(com);
  };

  return (
    <>
      {userData &&
        userData.map((obj, index) => (
          <ul key={index}>
            <li>
              <div className="content">
                <h2>{obj.title}</h2>
                <p>{obj.details}</p>
                <div className="date-container">
                  <label>due date:</label>
                  <p>{obj.dueDate}</p>
                </div>
              </div>
              <div className="icons">
                <i
                  className="fa-solid fa-trash deleteicon"
                  onClick={() => deleteItem(index)}
                ></i>

                <div
                  className="button-container"
                  onClick={() => {
                    handleChangeStatus(index);
                  }}
                >
                  {obj.status ? (
                    <div className="completed-container">
                      <i className="fa-solid fa-circle-check check-icon"></i>
                      <p id="complete-text">completed</p>
                    </div>
                  ) : (
                    <div className="completed-container">
                      <i className="fa-solid fa-circle-xmark close-icon"></i>
                      <p id="incomplete-text">not completed</p>
                    </div>
                  )}
                </div>
              </div>
            </li>
          </ul>
        ))}
    </>
  );
}

export default DisplayTask;
