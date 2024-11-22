import React, { useState } from "react";
import DoctorLayout from "../../layouts/DoctorLayout";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { AiOutlineDelete } from "react-icons/ai";

const ToDoList = () => {
  const [tasks, setTasks] = useState({
    missed: [],
    upcoming: [],
    completed: [],
  });
  const [newTask, setNewTask] = useState("");

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

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return;

    const sourceList = Array.from(tasks[source.droppableId]);
    const destinationList = Array.from(tasks[destination.droppableId]);

    const [movedItem] = sourceList.splice(source.index, 1);
    destinationList.splice(destination.index, 0, movedItem);

    setTasks({
      ...tasks,
      [source.droppableId]: sourceList,
      [destination.droppableId]: destinationList,
    });
  };

  const deleteTask = (column, index) => {
    const updatedColumn = tasks[column].filter((_, i) => i !== index);
    setTasks({ ...tasks, [column]: updatedColumn });
  };

  // Define the background colors for each column
  const columnColors = {
    missed: "bg-red-100",
    upcoming: "bg-blue-100",
    completed: "bg-green-50",
  };

  return (
    <DoctorLayout>
      <div className="p-6 bg-white shadow rounded-md max-w-6xl mx-auto">
        <div className="flex items-center mb-6">
          <input
            type="text"
            placeholder="Add a new task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none "
          />
          <button
            onClick={handleAddTask}
            className="bg-orange-500 text-white px-6 py-2 rounded-r-md hover:bg-orange-600 transition"
          >
            Add Task
          </button>
        </div>

        <DragDropContext onDragEnd={onDragEnd}>
          <div className="grid grid-cols-3 gap-6">
            {["missed", "upcoming", "completed"].map((column) => (
              <Droppable key={column} droppableId={column}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className={`p-4 rounded-lg border-2 border-gray-200 ${
                      columnColors[column]
                    }`}
                  >
                    <h3 className="text-xl font-semibold text-gray-700 capitalize mb-3 text-center py-2 rounded-md">
                      {column.charAt(0).toUpperCase() + column.slice(1)}
                    </h3>
                    <div className="w-full bg-gray-400 h-0.5"></div>
                    <div className="space-y-2 overflow-y-auto max-h-64 mt-2">
                      {tasks[column].length === 0 ? (
                        <p className="text-gray-500 text-center italic">
                          No tasks
                        </p>
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
                                className="flex justify-between items-center p-3 bg-white border rounded-md shadow-sm hover:bg-gray-50 transition"
                              >
                                <span>{task.text}</span>
                                <button
                                  onClick={() => deleteTask(column, index)}
                                  className="text-red-500 hover:text-red-600 focus:outline-none"
                                  aria-label="Delete task"
                                >
                                  <AiOutlineDelete size={18} />
                                </button>
                              </div>
                            )}
                          </Draggable>
                        ))
                      )}
                      {provided.placeholder}
                    </div>
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