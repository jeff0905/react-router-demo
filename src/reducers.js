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
const goods = (state = [], action) => {
    switch(action.type) {
        case 'fetchGood':
            return state;
        case 'fetchGoodsOk':
            return state;
        case 'fetchGoodsFail':
            return state;
        
        case 'addGood':
            return state;
        case 'addGoodOk':
            return state;
        case 'addGoodFail':
            return state;

        case 'delGood':
            return state;
        case 'delGoodOk':
            return state;
        case 'delGoodFail':
            return state;
        
        case 'updateGood':
            return state;
        case 'updateGoodOk':
            return state;
        case 'updateGoodFail':
            return state;

        default:
            return state;
    }
}
const rootReducer = combineReducers({
    count: counterReducer,
})

export default rootReducer;
