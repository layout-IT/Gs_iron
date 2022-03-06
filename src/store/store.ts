import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
import {layoutReducer} from "../redux/layout-reducer/layoutReducer";

const rootReducer = combineReducers({
    layoutReducer : layoutReducer
})

export type RootState = ReturnType<typeof store.getState>

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))