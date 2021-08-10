import React, { useState } from "react";
import { tasks as tasksData } from "data/tasks";

export const StickersContext = React.createContext({
  tasks: [],
  deleteTask: () => {},
  handleAddSticker: () => {},
});

const StickersProvider = ({ children }) => {
  const [tasks, setTasks] = useState(tasksData);

  const deleteTask = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  const handleAddSticker = (values) => {
    const newTask = {
      title: values.title,
      description: values.description,
      category: values.category,
      data: values.data,
      id: "_" + Math.random().toString(36).substr(2, 9),
    };
    setTasks([newTask, ...tasks]);
  };

  return (
    <StickersContext.Provider
      value={{
        tasks,
        deleteTask,
        handleAddSticker,
      }}
    >
      {children}
    </StickersContext.Provider>
  );
};

export default StickersProvider;
