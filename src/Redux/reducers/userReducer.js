function userReducer(state = {}, action) {
  switch (action.type) {
    case "LOGIN":
      return { ...action.payload.data };
    case "LOGOUT":
      return {};

    default:
      return state;
  }
}
export default userReducer;
