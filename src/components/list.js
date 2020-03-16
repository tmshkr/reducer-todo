import React, { useReducer } from "react";

import Task from "./task";
import CreateTask from "./create-task";
import ClearCompleted from "./clear-completed";
import Search from "./search";

import { taskReducer, initialState } from "../reducers";

function List() {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  const { searchTerm, tasks } = state;
  return (
    <ul className="task-list list-group">
      <Search list={[state, dispatch]} />
      {Object.values(tasks)
        .filter(t => t.title.includes(searchTerm))
        .map(t => (
          <Task key={t.id} task={t} list={[state, dispatch]} />
        ))}
      <CreateTask list={[state, dispatch]} />
      <ClearCompleted list={[state, dispatch]} />
    </ul>
  );
}

export default List;
