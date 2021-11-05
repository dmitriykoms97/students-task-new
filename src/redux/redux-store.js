import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {studentsReducer} from "./students-reducer";
import thunkMiddleWare from "redux-thunk";

const rootReducer = combineReducers({
    studentsPage: studentsReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleWare)));

export default store;