import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import {AuthReducer}  from './Auth';


const reducer = combineReducers({AuthReducer});
const AuthStore = createStore(reducer, applyMiddleware(thunk));

export default AuthStore;