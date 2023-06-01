const ADD_USER = "ADD_USER";
const TOGGLE_TASK = "TOGGLE_TASK";
const DELETE_TASK = "DELETE_TASK";

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_USER:
        return [...state, action.payload]
    case TOGGLE_TASK:
        return state.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );
    case DELETE_TASK:
        return state.filter((task) => task.id !== action.payload);
    default:
        throw new Error("Acción no válida");
  }
}

