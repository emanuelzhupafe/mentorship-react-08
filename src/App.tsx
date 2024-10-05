import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/add-task" element={<AddTaskForm />} />
        <Route path="/" element={<TaskList />}></Route>
      </Routes>
    </Router>
  );
};
export default App;
