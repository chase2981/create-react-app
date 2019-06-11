import { combineReducers, Reducer } from 'redux'
import commentReducer from './comments'
import leadCardReducer from './leadCards'
import todoReducer from './todos'
import visibilityFilterReducer from './visibilityFilter'
import { routerReducer } from 'react-router-redux';
import { FlexReducer, chatReducer, FlexState, AppState, Actions } from '@twilio/flex-ui';
import { Flex } from '@twilio/flex-ui/src/FlexGlobal';
import tasksReducer from './tasks';
import taskLookup from './taskLookup';

export const rootReducer: Reducer = combineReducers({
    flex: FlexReducer,
    rd: combineReducers({
        comment: commentReducer,
        leadCard: leadCardReducer,
        todo: todoReducer,
        tasks: tasksReducer,
        taskLookup: taskLookup
    })
})

export default rootReducer;