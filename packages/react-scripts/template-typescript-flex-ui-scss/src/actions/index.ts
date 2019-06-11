let nextLeadCardId = 0
let nextTodoId = 0

export const addTodo = text => Promise.resolve({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})
​
export const addLeadCard = payload => ({
  type: 'ADD_LEAD_CARD',
  id: nextLeadCardId++,
  leadCard: payload
})

export const updateLeadCard = payload => ({
  type: 'UPDATE_LEAD_CARD',
  id: nextLeadCardId++,
  leadCard: payload.leadCard
})

export const updateTaskLeadCard = payload => ({
  type: 'UPDATE_TASK_LEAD_CARD',
  id: payload.leadCard.id,
  leadCard: payload.leadCard
})

export const updateTaskAttributes = payload => ({
  type: 'UPDATE_TASK_ATTRIBUTES',
  id: payload.attributes.id,
  attributes: payload.attributes
})

export const updatePhaseGroup = payload => ({
  type: 'UPDATE_PHASE_GROUP',
  id: 1,
  payload: payload
})

export const updateClient = payload => ({
  type: 'UPDATE_CLIENT',
  id: 1,
  payload: payload
})

export const updateTaskSearchAttributes = payload => ({
  type: 'UPDATE_TASK_SEARCH_ATTRIBUTES',
  id: payload.search.id,
  search: payload.search
})

export const setVisibilityFilter = payload => Promise.resolve({
  type: 'SET_VISIBILITY_FILTER',
  filter: payload
})
​
export const toggleTodo = payload => Promise.resolve({
  type: 'TOGGLE_TODO',
  id: payload
})
​
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const writeComment = (payload) => Promise.resolve({
    comment: payload.comment,
    type: 'WRITE_COMMENT'
});

export const updateComment = (payload) => ({
    id: payload.id,
    comment: payload.comment,
    type: 'UPDATE_COMMENT'
});

export const updateCommentAsync = (payload) => Promise.resolve({
    id: payload.id,
    comment: payload.comment,
    type: 'UPDATE_COMMENT_ASYNC'
});

export const deleteComment = (payload) => Promise.resolve({
    id: payload.id,
    type: 'DELETE_COMMENT'
});