import TaskCard from "./TaskCard";
import { useState } from "react";

export default function TaskList({
  tasks,
  updateTask,
  deleteTask,
  toggleComplete,
}) {
  const [filter, setFilter] = useState("All");

  const filteredTasks =
    filter === "All"
      ? tasks
      : tasks.filter((task) => task.category === filter);

  return (
    <div>
      <div className="flex gap-3 mb-4">
        <button
          onClick={() => setFilter("All")}
          className="px-3 py-1 bg-gray-300 rounded"
        >
          All
        </button>
        <button
          onClick={() => setFilter("Work")}
          className="px-3 py-1 bg-gray-300 rounded"
        >
          Work
        </button>
        <button
          onClick={() => setFilter("Personal")}
          className="px-3 py-1 bg-gray-300 rounded"
        >
          Personal
        </button>
        <button
          onClick={() => setFilter("Health")}
          className="px-3 py-1 bg-gray-300 rounded"
        >
          Health
        </button>
      </div>

      {filteredTasks.length === 0 ? (
        <p className="text-gray-600">No tasks yet.</p>
      ) : (
        filteredTasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            updateTask={updateTask}
            deleteTask={deleteTask}
            toggleComplete={toggleComplete}
          />
        ))
      )}
    </div>
  );
}
