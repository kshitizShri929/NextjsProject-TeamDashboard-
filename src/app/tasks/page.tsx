"use client";

import { useEffect, useState } from "react";
import TaskForm from "@/app/components/TaskForm";
import { Task } from "@/app/types";

const TaskManagerPage = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    // Load tasks from localStorage on initial render
    const savedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    setTasks(savedTasks);
  }, []);

  const handleAddTask = (task: Task) => {
    const newTasks = [...tasks, task];
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  const handleDeleteTask = (taskIndex: number) => {
    const updatedTasks = tasks.filter((_, index) => index !== taskIndex);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          Task Manager
        </h1>
        <TaskForm onSubmit={handleAddTask} />
        <ul className="mt-6 space-y-4">
          {tasks.length > 0 ? (
            tasks.map((task, index) => (
              <li
                key={index}
                className="flex justify-between items-center p-4 border rounded-lg shadow-sm bg-gray-100 hover:bg-gray-200 transition"
              >
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {task.title}
                  </h3>
                  <p className="text-gray-600">{task.description}</p>
                  <span
                    className={`inline-block mt-2 px-3 py-1 text-sm font-medium rounded-full ${
                      task.status === "Completed"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {task.status}
                  </span>
                </div>
                <button
                  onClick={() => handleDeleteTask(index)}
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-md transition"
                >
                  Delete
                </button>
              </li>
            ))
          ) : (
            <p className="text-gray-500 text-center">
              No tasks found. Add your first task!
            </p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default TaskManagerPage;
