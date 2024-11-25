import React from "react";
import axios from "axios";

const TaskItem = ({ task, handleEditTask }) => {

  const deleteTask = () => {
    axios
      .delete(`http://localhost:5000/api/tasks/${task._id}`)
      .then(() => window.location.reload()) // Recarga después de eliminar
      .catch((error) => console.error("Error deleting task:", error));
  };

  const toggleStatus = () => {
    axios
      .put(`http://localhost:5000/api/tasks/${task._id}`, {
        status: task.status === "pending" ? "completed" : "pending",
      })
      .then(() => window.location.reload()) // Recarga después de cambiar estado
      .catch((error) => console.error("Error updating task:", error));
  };

  return (
    <div className="row align-items-center" style={{ borderBottom: '1px solid #bbb', padding: '10px 15px 10px 0', display: 'flex'}}>
      <div className="task-item col-9 d-flex flex-column justify-content-center">
        <h6 className="mb-1">{task.name}</h6>
        <p className="mb-0">{task.description}</p>
      </div>
      <div className="col-1 d-flex justify-content-center">
        <button onClick={toggleStatus} className="btn btn-bd-primary">
          {task.status === "pending" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-check"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="#f0fbfa"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l5 5l10 -10" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-dots"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="#f0fbfa"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
              <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
              <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            </svg>
          )}
        </button>
      </div>
      <div className="col-1 d-flex justify-content-center">
        <button onClick={() => handleEditTask(task)} className="btn btn-bd-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-pencil"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#f0fbfa"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
            <path d="M13.5 6.5l4 4" />
          </svg>
        </button>
      </div>
      <div className="col-1 d-flex justify-content-center">
        <button onClick={deleteTask} className="btn btn-bd-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-trash"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#f0fbfa"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 7l16 0" />
            <path d="M10 11l0 6" />
            <path d="M14 11l0 6" />
            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
