import React, { useState } from "react";
import DoctorLayout from "../../layouts/DoctorLayout";
import { BiTask } from "react-icons/bi";
import { AiOutlinePlus, AiOutlineDelete } from "react-icons/ai";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [popupVisible, setPopupVisible] = useState(false);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(null);
  const [taskDetails, setTaskDetails] = useState({ deadline: "", description: "" });

  // Add a new task
  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false, deadline: "", description: "" }]);
      setNewTask("");
    }
  };

  // Open the popup for editing task details
  const openPopup = (index) => {
    setCurrentTaskIndex(index);
    setTaskDetails({
      deadline: tasks[index].deadline || "",
      description: tasks[index].description || "",
    });
    setPopupVisible(true);
  };

  // Close the popup
  const closePopup = () => {
    setPopupVisible(false);
    setTaskDetails({ deadline: "", description: "" });
  };

  // Save task details
  const saveTaskDetails = () => {
    const updatedTasks = tasks.map((task, index) =>
      index === currentTaskIndex
        ? { ...task, deadline: taskDetails.deadline, description: taskDetails.description }
        : task
    );
    setTasks(updatedTasks);
    closePopup();
  };

  // Delete a task
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <DoctorLayout>
      <div className="p-6 bg-white shadow rounded-md max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-800">To-Do List</h2>
          <BiTask className="text-3xl text-orange-600" />
        </div>

        <div className="flex items-center mb-4">
          <input
            type="text"
            placeholder="Add a new task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="flex-1 px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button
            onClick={handleAddTask}
            className="bg-orange-500 text-white px-4 py-2 rounded-r-md hover:bg-orange-600 transition"
          >
            <AiOutlinePlus className="inline" />
          </button>
        </div>

        {tasks.length === 0 ? (
          <p className="text-gray-500 text-center">No tasks added yet.</p>
        ) : (
          <ul className="space-y-3">
            {tasks.map((task, index) => (
              <li
                key={index}
                className={`p-3 border rounded-md ${
                  task.completed ? "bg-green-50 line-through" : "bg-white"
                }`}
                onClick={() => openPopup(index)}
              >
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium">{task.text}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteTask(index);
                    }}
                    className="text-red-500 hover:text-red-600"
                  >
                    <AiOutlineDelete />
                  </button>
                </div>
                {task.deadline && (
                  <p className="text-sm text-gray-500">Deadline: {task.deadline}</p>
                )}
                {task.description && (
                  <p className="text-sm text-gray-600">Description: {task.description}</p>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Popup Form */}
      {popupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-bold mb-4">Edit Task</h3>
            <label className="block mb-2">
              Deadline:
              <input
                type="date"
                value={taskDetails.deadline}
                onChange={(e) =>
                  setTaskDetails({ ...taskDetails, deadline: e.target.value })
                }
                className="block w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </label>
            <label className="block mb-2">
              Description:
              <textarea
                value={taskDetails.description}
                onChange={(e) =>
                  setTaskDetails({ ...taskDetails, description: e.target.value })
                }
                className="block w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              ></textarea>
            </label>
            <div className="flex justify-end space-x-3 mt-4">
              <button
                onClick={closePopup}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={saveTaskDetails}
                className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </DoctorLayout>
  );
};

export default ToDoList;
