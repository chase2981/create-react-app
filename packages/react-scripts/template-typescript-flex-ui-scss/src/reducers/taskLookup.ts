
const taskLookup = (state: any = [], action) => {
  // console.log('leadCards_reducer', [action, state])
  switch (action.type) {
    case 'UPDATE_CLIENT':
      return {
        ...state,
        ...{
          client: action.payload
        }
      }
    case 'UPDATE_PHASE_GROUP':
      return {
        ...state,
        ...{
          phaseGroup: action.payload
        }
      }
    default:
      return state
  }
}
​
export default taskLookup
