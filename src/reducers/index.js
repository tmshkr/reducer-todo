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

export const taskReducer = (state = { ...initialState }, action) => {
  console.log("action", action);

  state = { ...state };
  switch (action.type) {
    case "CREATE_TASK":
      const newTask = action.payload;
      state.tasks[newTask.id] = newTask;
      break;
    case "EDIT_TASK":
      break;
    case "CLEAR_COMPLETED":
      break;
    default:
      break;
  }
  console.log("state", state);
  return state;
};
