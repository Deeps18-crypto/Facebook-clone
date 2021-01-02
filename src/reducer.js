export const initialState = {
  user: null,
};

export const actiontype = {
  SET_USER: "SET_USER",
};

function reducer(state, action) {
  switch (action.type) {
    case actiontype.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
}

export default reducer;
