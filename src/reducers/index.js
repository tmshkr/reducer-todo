import {
  CREATE_TASK,
  EDIT_TASK,
  CLEAR_COMPLETED,
  SET_SEARCH
} from "../actions";

export const initialState = {
  tasks: {
    FyYvb00L: {
      id: "FyYvb00L",
      createdAt: 1584311638143,
      title: "hello",
      completed: false
    },
    "3ve4IatGn": {
      id: "3ve4IatGn",
      createdAt: 1584311639007,
      title: "world",
      completed: false
    }
  },
  searchTerm: ""
};

try {
  const saved = localStorage.getItem("tasks");
  if (saved) initialState.tasks = JSON.parse(saved);
} catch {}

let timer;
export const taskReducer = (state, action) => {
  console.log("action", action);

  state = { ...state };
  switch (action.type) {
    case CREATE_TASK:
      const newTask = action.payload;
      state.tasks[newTask.id] = newTask;
      break;
    case EDIT_TASK:
      const updatedTask = action.payload;
      state.tasks[updatedTask.id] = updatedTask;
      break;
    case CLEAR_COMPLETED:
      const { tasks } = state;
      for (let key in tasks) {
        if (tasks[key].completed) {
          delete tasks[key];
        }
      }
      break;
    case SET_SEARCH:
      state.searchTerm = action.payload;
      break;
    default:
      break;
  }
  console.log("state", state);

  clearTimeout(timer);
  timer = setTimeout(() => {
    try {
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    } catch {}
  }, 500);
  return state;
};
