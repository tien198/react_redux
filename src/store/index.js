import { createStore } from 'redux';
const initialState = { counter: 0, showCounter: true }
function counterReducer(state = initialState, action) {
    const { type, amount = 0 } = action
    if (type === 'increment')
        return {
            ...state,
            counter: state.counter + 1
        }
    if (type === 'increase-by') {
        return {
            ...state,
            counter: state.counter + amount
        }
    }
    else if (type === 'decrement')
        return {
            ...state,
            counter: state.counter - 1
        }
    else if (type === 'toggle')
        return {
            ...state,
            showCounter: !state.showCounter
        }
    return state
}

const store = createStore(counterReducer)

export default store