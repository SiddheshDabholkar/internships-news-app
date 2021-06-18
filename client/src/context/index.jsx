export const initialState = {
  toggle: true,
  modal: false,
  newsmodal: false,
  link: "",
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
  if (action.type === "newsmodal") {
    return {
      ...state,
      newsmodal: action.payload,
    };
  }
  if (action.type === "link") {
    return {
      ...state,
      link: action.payload,
    };
  }
  return state;
};
