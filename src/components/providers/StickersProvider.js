import React, { useState } from "react";
import { tasks as tasksData } from "data/tasks";

export const StickersContext = React.createContext({
  tasks: [],
  deleteTask: () => {},
});

const StickersProvider = ({ children }) => {
  const [tasks, setTasks] = useState(tasksData);

  const deleteTask = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };
  return (
    <StickersContext.Provider
      value={{
        tasks,
        deleteTask,
      }}
    >
      {children}
    </StickersContext.Provider>
  );
};

export default StickersProvider;
