import { combineReducers } from 'redux'


const counterReducer = (state = 0, action) => {
    switch(action.type) {
        case 'ADD':
            return state + 1
        case 'DEL':
            return state - 1
        default:
            return state
    }
}
const rootReducer = combineReducers({
    count: counterReducer
})

export default rootReducer;
