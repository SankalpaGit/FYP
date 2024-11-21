import React, { useState } from "react";
import DoctorLayout from "../../layouts/DoctorLayout";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { AiOutlineDelete } from "react-icons/ai";

const ToDoList = () => {
  const [tasks, setTasks] = useState({
    missed: [],
    upcoming: [],
    completed: [],
  });
  const [newTask, setNewTask] = useState("");

  // Handle adding new tasks to the "Upcoming" column
  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks({
        ...tasks,
        upcoming: [
          ...tasks.upcoming,
          { id: Date.now().toString(), text: newTask },
        ],
      });
      setNewTask("");
    }
  };

  // Handle drag-and-drop logic
  const onDragEnd = (result) => {
    const { source, destination } = result;

    // If dropped outside the list, return early
    if (!destination) return;

    const sourceList = tasks[source.droppableId];
    const destinationList = tasks[destination.droppableId];

    // Move the task from the source list to the destination list
    const [removed] = sourceList.splice(source.index, 1);
    destinationList.splice(destination.index, 0, removed);

    // Update the tasks state
    setTasks({
      ...tasks,
      [source.droppableId]: sourceList,
      [destination.droppableId]: destinationList,
    });
  };

  // Delete a task from any column
  const deleteTask = (column, index) => {
    const updatedColumn = tasks[column].filter((_, i) => i !== index);
    setTasks({ ...tasks, [column]: updatedColumn });
  };

  return (
    <DoctorLayout>
      <div className="p-6 bg-white shadow rounded-md max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Drag-and-Drop To-Do List
        </h2>

        {/* Input for adding new tasks */}
        <div className="flex items-center mb-6">
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
            Add Task
          </button>
        </div>

        {/* Drag-and-Drop Columns */}
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="grid grid-cols-3 gap-6">
            {["missed", "upcoming", "completed"].map((column) => (
              <Droppable key={column} droppableId={column}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="bg-gray-100 p-4 rounded-lg shadow-md"
                  >
                    <h3 className="text-lg font-semibold text-gray-700 capitalize mb-4">
                      {column}
                    </h3>
                    {tasks[column].length === 0 ? (
                      <p className="text-gray-500 text-center">No tasks</p>
                    ) : (
                      tasks[column].map((task, index) => (
                        <Draggable
                          key={task.id}
                          draggableId={task.id}
                          index={index}
                        >
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className="p-3 mb-3 bg-white border rounded-md shadow flex justify-between items-center"
                            >
                              <span>{task.text}</span>
                              <button
                                onClick={() => deleteTask(column, index)}
                                className="text-red-500 hover:text-red-600"
                              >
                                <AiOutlineDelete />
                              </button>
                            </div>
                          )}
                        </Draggable>
                      ))
                    )}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            ))}
          </div>
        </DragDropContext>
      </div>
    </DoctorLayout>
  );
};

export default ToDoList;
