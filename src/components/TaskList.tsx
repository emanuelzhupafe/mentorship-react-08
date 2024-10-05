import { useEffect } from "react";
import { useStore } from "../store";
import { Task } from "../types/tasks";
import "./TaskList.css";
import { Link } from "react-router-dom";

const TaskList: React.FC = () => {
    const { tasks, setAllTasks, areTasksLoaded, setTasksLoaded, toggleTaskStatus } = useStore();

    useEffect(() => {
        if (!areTasksLoaded) {
            fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
                .then((response) => response.json())
                .then((fetchedTasks) => {
                    setAllTasks(fetchedTasks);
                    setTasksLoaded();
                })
                .catch((error) => {
                    console.error("Error fetching tasks:", error);
                });
        }
    }, [areTasksLoaded, setAllTasks, setTasksLoaded]);

    const toggleStatus = (id: number) => toggleTaskStatus(id);

    return (
        <div className="task-list-container">
            <div className="task-list-header">
                <h2>Task List</h2>
                <Link className="button" to="/add-task">
                    Add Task
                </Link>
            </div>
            <div className="task-card-container">
                {tasks.map((task: Task) => (
                    <div
                        key={task.id}
                        className={`task-card ${task.completed ? "completed" : ""}`}
                        onClick={() => toggleStatus(task.id)}
                    >
                        <h3>{task.title}</h3>
                        <p>{task.completed ? "Completed" : "Not Completed"}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TaskList;
