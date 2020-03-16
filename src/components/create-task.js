import React, { memo, useReducer } from "react";
import shortid from "shortid";

import { taskReducer } from "../reducers";

function CreateTask(props) {
  const [state, dispatch] = props.list;

  function handleKeyPress(e) {
    if (e.which === 13 && e.target.value) {
      const newTask = createTask(e.target.value);
      dispatch({
        type: "CREATE_TASK",
        payload: newTask
      });
      e.target.value = "";
    }
  }

  function createTask(title) {
    return {
      id: shortid.generate(),
      createdAt: Date.now(),
      title,
      completed: false
    };
  }

  return (
    <li className="list-group-item create-task">
      <input
        type="text"
        placeholder="New task..."
        onKeyPress={handleKeyPress}
      />
    </li>
  );
}

export default memo(CreateTask);
