import React, { useContext } from "react";
import "./TodoApp.css";
import { AppContext } from "../../ReactContext/AppContext";
import DisplayTask from "../DisplayTasks/DisplayTask";
import FilterTask from "../FilterTask/FilterTask";
import TaskForm from "../TaskForm/TaskForm";

function TodoApp() {
  const { filter } = useContext(AppContext);
  return (
    <div className="todo-container">
      <TaskForm />
      {filter ? <FilterTask /> : <DisplayTask />}
    </div>
  );
}

export default TodoApp;
