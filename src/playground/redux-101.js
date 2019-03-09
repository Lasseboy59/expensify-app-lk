import { createStore } from 'redux';

// Action generators - functions that return action objects


// const add = (({ a, b }, c) => {
//     return a + b + c;
// });
// console.log(add({a: 1, b: 12}, 100));

// const incrementCount = (payload = {}) => ({
//     type: 'INCREMENT',
//     incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
// });

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy 
});

const setCount = ({ count }) => ({
    type: 'SET',
    count 
});

const resetCount = () => ({
    type: 'RESET'
});

// Reducers
// 1. Reducers are pure functions
// 2. Never change state or action

const countReducer = (state = { count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            // const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                // count: state.count - incrementBy
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count: 0
        };  
        case 'SET':
            return {
                count: action.count
            }          
        default:
            return state;
    }

}


const store = createStore(countReducer);

const unsubsribe = store.subscribe(() => {
    console.log(store.getState());
});


// Actions - an object that gets send to the store
// I'd like to increment, decrement, reset the count


// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 10
// });

store.dispatch(incrementCount({ incrementBy: 10 }));

// unsubsribe();

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 105 }));


// Compare
// this.prevState((prevState) => {
//     return prevState;
// });