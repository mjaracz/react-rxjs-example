const initialState = {
  isLoading: false,
  users: [],
  error: {}
}
export const usersListReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USERS_LIST': {
      return {
        ...state,
        isLoading: true
      }
    }
    case 'USERS_LIST_FETCH': {
      return {
        ...state,
        isLoading: false,
        users: action.payload
      }
    }
    case 'USERS_LIST_ERROR': {
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    }
    case 'USERS_FILTER_LIST': {
      return {
        ...state,
        isLoading: false,
        users: action.payload
      }
    }
    case 'USERS_LIST_CLEAN': {
      return {
        ...state,
        users: [],
        error: {},
        isLoading: false
      }
    }
    default: {
      return state
    }
  }
}