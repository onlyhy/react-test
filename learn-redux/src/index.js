const redux = require('redux');

const initialState = {
    counter: 0
}

// 创建reducer
const reducer = ((state = initialState, action)=>{
    switch(action.type) {
        case 'INCREMENT':
            return {...state, counter: state.counter + 1};
        case 'DECREMENT':
            return {...state, counter: state.counter - 1};
        case 'ADD_NUMBER':
            return {...state, counter: state.counter + action.number}
        default:
            return state;
    }
})

// 根据reducer创建store
const store = redux.createStore(reducer);

store.subscribe(()=>{
    console.log(store.getState());
})

// 修改store中的state
store.dispatch({
    type: 'INCREMENT'
})

store.dispatch({
    type: 'DECREMENT'
})

store.dispatch({
    type: 'ADD_NUMBER',
    number: 5
})