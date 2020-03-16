import React, { useEffect, useRef, useState, memo } from "react";

import { EDIT_TASK } from "../actions";
import { parseTags } from "../utils/parseTags";

function Task(props) {
  const { list, task } = props;
  const [title, setTitle] = useState(task.title);
  const [checked, setChecked] = useState(task.completed);
  const [tags, setTags] = useState(task.tags);
  const didUpdate = useRef(false);

  // update list state
  useEffect(() => {
    // check to see that the component has already mounted,
    // so that it doesn't dispatch on initial mount
    if (didUpdate.current) {
      list.dispatch({
        type: EDIT_TASK,
        payload: { ...task, completed: checked, title, tags }
      });
    } else didUpdate.current = true;
    // eslint-disable-next-line
  }, [title, checked, tags]);

  const handleKeyDown = e => {
    console.log(e);
    if (e.which === 13) {
      const match = title.match(/#\S*/g);
      if (match) {
        setTags([...tags, ...match]);
        setTitle(title.replace(/#\S*/g, "").trim());
      }
    }
  };

  const deleteTag = index => {
    const copy = [...tags];
    copy.splice(index, 1);
    setTags(copy);
  };

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
        onKeyDown={handleKeyDown}
        onChange={e => setTitle(e.target.value)}
      />
      <div className="tags">
        {tags.map((tag, index) => (
          <div key={tag} className="tag">
            <i onClick={() => deleteTag(index)}></i>
            {tag.slice(1)}
          </div>
        ))}
      </div>
    </li>
  );
}

export default memo(Task);
