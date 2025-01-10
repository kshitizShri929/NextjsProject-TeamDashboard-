"use client";

import { useState } from "react";
import { Task } from "@/app/types";

interface TaskFormProps {
  onSubmit: (task: Task) => void;
}

const TaskForm = ({ onSubmit }: TaskFormProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<"To Do" | "In Progress" | "Completed">("To Do"); // default status


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && description) {
      onSubmit({ title, description, status });
      setTitle("");
      setDescription("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 bg-gray-50 p-6 border rounded-lg shadow-lg"
    >
      <div>
        <label htmlFor="title" className="block text-lg font-medium text-gray-700">
          Task Title
        </label>
        <input
          type="text"
          id="title"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-2 w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>

      <div>
        <label
          htmlFor="description"
          className="block text-lg font-medium text-gray-700"
        >
          Task Description
        </label>
        <textarea
          id="description"
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-2 w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          required
        ></textarea>
      </div>

      <div>
        <label htmlFor="status" className="block text-lg font-medium text-gray-700">
          Task Status
        </label>
        <select
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value as "To Do" | "In Progress" | "Completed")}

          className="mt-2 w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition duration-300"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
