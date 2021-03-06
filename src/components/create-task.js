import React, { memo } from "react";
import shortid from "shortid";
import { CREATE_TASK } from "../actions";

function CreateTask(props) {
  const { list } = props;

  function handleKeyPress(e) {
    if (e.which === 13 && e.target.value) {
      const newTask = createTask(e.target.value);
      list.dispatch({
        type: CREATE_TASK,
        payload: newTask
      });
      e.target.value = "";
    }
  }

  function createTask(title) {
    let tags = title.match(/#\S*/g);
    if (tags) {
      tags = [...new Set([...tags])];
      title = title.replace(/#\S*/g, "").trim();
    }
    return {
      id: shortid.generate(),
      createdAt: Date.now(),
      tags: tags || [],
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
