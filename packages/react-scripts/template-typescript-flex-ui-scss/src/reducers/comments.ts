const comments = (state = [], action) => {
    // console.log('comments_reducer', [action, state])
    switch (action.type) {
      case 'ADD_COMMENT':
        return [
          ...state,
          {
            id: action.id,
            comment: action.comment,
            completed: false
          }
        ]
      case 'DELETE_COMMENT':
        return [
          ...state,
          {
            id: action.id,
            comment: action.comment,
            completed: false
          }
        ]
      case 'UPDATE_COMMENT':
        return [
          ...state,
          {
            id: action.id,
            comment: action.comment,
            completed: false
          }
        ]
      default:
        return state
    }
  }
  ​
  export default comments