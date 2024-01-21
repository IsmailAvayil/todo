import React, { useContext } from "react";
import "../TodoApp/TodoApp.css";
import { AppContext } from "../../ReactContext/AppContext";

function TaskForm() {
  const {
    handleChangeTitle,
    handleChangeDetails,
    handleDueDate,
    userForm,
    handleFilter,
    handleSubmit,
    filter,
  } = useContext(AppContext);
  return (
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
      <input type="date" onChange={handleDueDate} value={userForm.dueDate} />

      <div>
        <div className="form-buttons">
          <button type="submit" className="ui green button">
            Add
          </button>

          {filter === false ? (
            <button className="ui grey button" onClick={handleFilter}>
              <i className="fa-solid fa-filter" style={{ color: "white" }}></i>
            </button>
          ) : null}
        </div>
      </div>
    </form>
  );
}

export default TaskForm;
