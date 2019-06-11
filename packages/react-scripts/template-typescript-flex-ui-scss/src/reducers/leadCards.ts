const leadCards = (state = [], action) => {
  // console.log('leadCards_reducer', [action, state])
  switch (action.type) {
    case 'ADD_LEAD_CARD':
      return [
        ...state,
        {
          id: action.id,
          leadCard: action.leadCard,
          completed: false
        }
      ]
    case 'DELETE_LEAD_CARD':
      return [
        ...state,
        {
          id: action.id,
          leadCard: action.leadCard,
          completed: false
        }
      ]
    case 'UPDATE_LEAD_CARD':
      return [
        ...state,
        {
          id: action.id,
          leadCard: action.leadCard,
          completed: false
        }
      ]
    default:
      return state
  }
}
​
export default leadCards