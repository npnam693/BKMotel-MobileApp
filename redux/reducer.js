const initState = {
    userData: null,
    error: null,
}
const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
          return {
            ...state,
            user: action.payload,
            error: null,
          };
        case 'LOGIN_FAILURE':
          return {
            ...state,
            user: null,
            error: action.payload,
          };
        case 'LOGOUT':
          return {
            ...state,
            user: null,
            error: null,
          };
        default:
          return state;
      }
}

export default rootReducer