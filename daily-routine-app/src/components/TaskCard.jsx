export default function TaskCard({ task, index, deleteTask }) {
  return (
    <div className="p-3 bg-white rounded shadow flex justify-between items-center">
      <p className="text-gray-800">{task}</p>
      <button
        onClick={() => deleteTask(index)}
        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  );
}
