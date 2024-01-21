import React, { useContext } from "react";
import "../TodoApp/TodoApp.css";
import { AppContext } from "../../ReactContext/AppContext";

function FilterTask() {
  const { filteredTask } = useContext(AppContext);
  console.log(filteredTask);

  return (
    <>
      {filteredTask &&
        filteredTask.map((obj, index) => (
          <ul key={index}>
            <li>
              <div className="content">
                <h2>{obj.title}</h2>
                <p>{obj.details}</p>
                <div className="date-container">
                  <label>due date:</label>
                  <p>
                    {obj.dueDate}
                  </p>
                </div>
              </div>
              <div className="icons">
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
    </>
  );
}

export default FilterTask;
