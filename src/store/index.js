import {createStore, combineReducers, } from 'redux';
import { todos } from './reducer';
let store = createStore(
    combineReducers({
        todos: todos
    })
);
export default store;