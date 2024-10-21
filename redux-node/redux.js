const { createStore, applyMiddleware } = require('redux')
const thunk = require('redux-thunk')
// import { createStore } from 'redux';

function counterReducer(state, action) {
    const { type } = action
    if (type === 'increase')
        return { counter: state.counter + 1 }
    if (type === 'decrease')
        return { counter: state.counter - 1 }

    return state
}

const store = createStore(counterReducer, applyMiddleware(thunk))

function counterSubcribe() {
    const lastState = store.getState()
    console.log(lastState)
}

store.subscribe(counterSubcribe)

store.dispatch({ type: '' })
