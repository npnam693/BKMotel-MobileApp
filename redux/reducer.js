const initState = {
    user: null,
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
        case 'ADD_FAVOURITE':
          // state.user.data.favourites = action.payload
          return {
            ...state,
            user: {
              ...state.user,
              data: {
                ...state.user.data,
                favourites: action.payload
              }
            }
          }
        default:
          return state;
      }
}

export default rootReducer