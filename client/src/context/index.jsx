export const initialState = {
  toggle: true,
  modal: false,
};

export const reducer = (state, action) => {
  if (action.type === "toggle") {
    return {
      ...state,
      toggle: action.payload,
    };
  }
  if (action.type === "modal") {
    return {
      ...state,
      modal: action.payload,
    };
  }
  return state;
};
