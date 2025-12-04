export default function TaskList({ tasks }) {
  if (tasks.length === 0)
    return <p className="text-gray-500">No tasks yet.</p>;

  return (
    <ul className="space-y-2">
      {tasks.map((task, index) => (
        <li key={index} className="p-2 border rounded">
          {task}
        </li>
      ))}
    </ul>
  );
}
