// Task.js

import React from "react";

function Task({ task, onDelete, onMarkAsDone }) {
  return (
    <div className={`py-2 ${task.done ? "bg-green-100" : ""}`}>
      <span className="mr-4">{task.title}</span>
      <span>{task.date}</span>
      {!task.done && (
        <>
          <button className="ml-4" onClick={() => onMarkAsDone(task.id)}>
            Mark as Done
          </button>
          <button className="ml-4" onClick={() => onDelete(task.id)}>
            Delete
          </button>
        </>
      )}
    </div>
  );
}

export default Task;
