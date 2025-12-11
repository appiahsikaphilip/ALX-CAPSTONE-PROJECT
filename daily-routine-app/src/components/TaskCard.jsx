import { useState } from "react";

export default function TaskCard({
  task,
  updateTask,
  deleteTask,
  toggleComplete,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);

  const saveEdit = () => {
    updateTask({ ...task, title });
    setIsEditing(false);
  };

  return (
    <div className="bg-white p-4 rounded shadow mb-3 flex justify-between items-center">
      {/* Left side – Task Info */}
      <div>
        {isEditing ? (
          <input
            className="border p-1 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h3
            className={`text-lg ${
              task.completed ? "line-through text-gray-500" : ""
            }`}
          >
            {task.title}
          </h3>
        )}

        <p className="text-sm text-gray-600">{task.category}</p>
      </div>

      {/* Right side – Actions */}
      <div className="flex gap-2">
        {/* Mark complete */}
        <button
          onClick={() => toggleComplete(task.id)}
          className="px-2 py-1 bg-green-500 text-white rounded"
        >
          ✓
        </button>

        {/* Edit */}
        {isEditing ? (
          <button
            onClick={saveEdit}
            className="px-2 py-1 bg-blue-600 text-white rounded"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="px-2 py-1 bg-yellow-500 text-white rounded"
          >
            Edit
          </button>
        )}

        {/* Delete */}
        <button
          onClick={() => deleteTask(task.id)}
          className="px-2 py-1 bg-red-600 text-white rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
