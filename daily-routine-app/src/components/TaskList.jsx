import TaskCard from "./TaskCard";

export default function TaskList({ tasks, deleteTask }) {
  if (tasks.length === 0)
    return <p className="text-gray-500">No tasks yet.</p>;

  return (
    <div className="space-y-3">
      {tasks.map((task, index) => (
        <TaskCard
          key={index}
          task={task}
          index={index}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}
