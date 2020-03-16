import React, { useEffect, useRef, useState, memo } from "react";

import { EDIT_TASK } from "../actions";

function Task(props) {
  const { list, task } = props;
  const [title, setTitle] = useState(task.title);
  const [checked, setChecked] = useState(task.completed);
  const didUpdate = useRef(false);

  // update list state
  useEffect(() => {
    // check to see that the component has already mounted,
    // so that it doesn't dispatch on initial mount
    if (didUpdate.current) {
      list.dispatch({
        type: EDIT_TASK,
        payload: { ...task, completed: checked, title }
      });
    } else didUpdate.current = true;
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
