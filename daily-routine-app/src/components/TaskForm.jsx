import { useState } from "react";

export default function TaskForm({ addTask }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    addTask(task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 my-4">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter new task"
        className="border p-2 rounded flex-1"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 rounded">
        Add
      </button>
    </form>
  );
}
