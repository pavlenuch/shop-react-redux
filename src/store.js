import { createStore, applyMiddleware } from 'redux';

import reducer from './reducers';

const logMiddleware = ({getState}) => (next) => (action) => {
    console.log(action.type, getState())
    return next(action);
}

const stringMiddleware = () => (next) => (action) => {
    if(typeof action === 'string') {
        return next({
            type: action
        })
    }
    return next(action);
}

// const enchancer = (createStore) => (...args) => {
//     const store = createStore(...args);

//     const originalDispatch = store.dispatch;
//     store.dispatch = (action) => {
//         if(typeof action === 'string') {
//             return originalDispatch({
//                 type: action
//             })
//         }
//     return originalDispatch(action);
//     }
//     return store;
// }

const store = createStore(reducer, applyMiddleware(stringMiddleware, logMiddleware));

store.dispatch('HELLO')

export default store;