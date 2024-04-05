import React, { useState, useEffect } from "react";
import axios from "axios";
import EventCalendar from "./components/calender/EventCalender";

const App = ({ initialDate, calendarData }) => {
  const [task, setTasks] = useState([]);

  useEffect(() => {
    // Fetch tasks from the backend API
    axios
      .get("http://localhost:3001/tasks")
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
      });
  }, []);

  const handleTaskDelete = (taskId) => {
    // Delete task from the backend
    axios
      .delete(`http://localhost:3001/tasks/${taskId}`)
      .then(() => {
        // Update tasks state after successful deletion
        setTasks(task.filter((task) => task.id !== taskId));
      })
      .catch((error) => {
        console.error("Error deleting task:", error);
      });
  };
  return (
    <div className=" flex justify-center items-center h-full">
      <div>
        <h1 className="text-3xl font-bold my-6  text-center">
          Weekly Todo List
        </h1>
        <EventCalendar
          initialDate="2024-04-01"
          task={task}
          onTaskDelete={handleTaskDelete}
        />
      </div>
    </div>
  );
};

export default App;
