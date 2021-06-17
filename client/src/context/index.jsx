export const initialState = false;

export const reducer = (state, action) => {
  if (action.type === "toggle") return action.payload;
  return state;
};
