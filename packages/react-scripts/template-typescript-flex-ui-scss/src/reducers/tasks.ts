
const tasks = (state: any = [], action) => {
  // console.log('leadCards_reducer', [action, state])
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        [action.id]: {
          leadCard: action.leadCard
        }
      }
    case 'DELETE_TASK':
      return {
        ...state,
        [action.id]: {
          leadCard: action.leadCard
        }
      }
    case 'UPDATE_TASK_LEAD_CARD':
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          leadCard: action.leadCard
        }
      }
    case 'UPDATE_TASK_SEARCH_ATTRIBUTES':
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          search: action.search
        }
      }
    case 'UPDATE_TASK_ATTRIBUTES':
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          attributes: action.attributes
        }
      }
    default:
      return state
  }
}
​
export default tasks
