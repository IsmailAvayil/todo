import React, { useContext} from "react";
import "./TodoApp.css";
import { AppContext } from "../../ReactContext/AppContext";

function TodoApp() {
  const {
    handleChangeDetails,
    handleChangeTitle,
    userForm,
    userData,
    handleSubmit,
    setUserData,
  } = useContext(AppContext);

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
    <div className="todo-container">
      <form className="user-input" onSubmit={handleSubmit}>
        <h1>TodoApp</h1>
        <div>
          <input
            type="text"
            placeholder="Enter the title"
            onChange={handleChangeTitle}
            name="title"
            value={userForm.title}
          ></input>
        </div>

        <div>
          <textarea
            type="text"
            placeholder="Enter the Detials"
            onChange={handleChangeDetails}
            name="details"
            value={userForm.details}
          ></textarea>
        </div>
        <div>
          <button type="submit" className="ui green button">
            Add
          </button>
        </div>
      </form>

      {userData &&
        userData.map((obj, index) => (
          <ul key={index}>
            <li>
              <div className="content">
                <h2>{obj.title}</h2>
                <p>{obj.details}</p>
              </div>
              <div className="icons">
                <i
                  className="fa-solid fa-trash deleteicon"
                  onClick={() => deleteItem(index)}
                ></i>

                <button
                  onClick={() => {
                    handleChangeStatus(index);
                  }}
                  className="ui mini toggle button active"
                >
                  {obj.status ? <p>completed</p> : <p>complete</p>}
                </button>
                <div className="completed-container">
                  <i className="fa-solid fa-check tickicon"></i>
                  {obj.status ? (
                    <p id="complete-text">completed</p>
                  ) : (
                    <p id="incomplete-text">not completed</p>
                  )}
                </div>
              </div>
            </li>
          </ul>
        ))}
    </div>
  );
}

export default TodoApp;
