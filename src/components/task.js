import React, { useEffect, useState, memo } from "react";

import { EDIT_TASK } from "../actions";

function Task(props) {
  const { list, task } = props;
  const [title, setTitle] = useState(task.title);
  const [checked, setChecked] = useState(task.completed);

  // update list state
  useEffect(() => {
    list.dispatch({
      type: EDIT_TASK,
      payload: { ...task, completed: checked, title }
    });
    // // eslint-disable-next-line
  }, [title, checked]);

  return (
    <li className="task list-group-item">
      <input
        type="checkbox"
        checked={checked}
        onChange={e => setChecked(e.target.checked)}
      />
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
    </li>
  );
}

export default memo(Task);
