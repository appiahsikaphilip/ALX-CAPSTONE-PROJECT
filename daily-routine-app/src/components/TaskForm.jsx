import { useState } from "react";

export default function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;

    const newTask = {
      id: Date.now(),
      title,
      category,
      completed: false,
    };

    addTask(newTask);
    setTitle("");
    setCategory("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-6">
      <h2 className="text-lg font-semibold mb-3">Add Task</h2>

      <input
        type="text"
        className="w-full border p-2 rounded mb-3"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <select
        className="w-full border p-2 rounded mb-3"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Select category</option>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Health">Health</option>
      </select>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        Add Task
      </button>
    </form>
  );
}
