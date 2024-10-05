// AddTaskForm.tsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AddTaskForm.css";
import { useStore } from "../store";

const AddTaskForm: React.FC = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const { addTask } = useStore();
  const navigate = useNavigate();

  const handleAddTask = () => {
    if (taskTitle.trim() !== "") {
      addTask(taskTitle);
      navigate("/");
    }
  };

  return (
    <div className="add-task-form-container">
      <h2>Add Task</h2>
      <label htmlFor="taskTitle">Task Title:</label>
      <input
        type="text"
        id="taskTitle"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
      <Link to="/">Cancel</Link>
    </div>
  );
};

export default AddTaskForm;
