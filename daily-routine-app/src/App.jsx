import { useState } from "react";
import Navbar from "./components/Navbar";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => setTasks([...tasks, task]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-xl mx-auto p-4">
        <TaskForm addTask={addTask} />
        <TaskList tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
